import { CategoriesItem } from "@/components/Announcements/Categories/CategoriesItem/CategoriesItem";
import { Wrapper } from "@/components/Shared/Wrapper/Wrapper";
import { CategoryType } from "@/types/category";

export async function CategoriesList() {
  const res = await fetch(`${process.env.BACKEND_URL}/category`, { cache: "no-store" });

  const categories: CategoryType[] = await res.json();

  return (
    <Wrapper customClass="py-12 lg:py-16">
      <h2 className="text-3xl font-semibold text-center mb-6 lg:mb-8">Categories</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => {
          return <CategoriesItem key={category.slug} category={category} />;
        })}
      </div>
    </Wrapper>
  );
}
