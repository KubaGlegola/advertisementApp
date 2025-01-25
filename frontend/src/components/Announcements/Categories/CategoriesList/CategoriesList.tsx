import { CategoriesItem } from "@/components/Announcements/Categories/CategoriesItem/CategoriesItem";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { Wrapper } from "@/components/Shared/Wrapper";
import { CategoryType } from "@/types/category";

export async function CategoriesList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, { cache: "no-store" });

  const categories: CategoryType[] = await res.json();

  return (
    <Wrapper customClass="py-12 lg:py-16 w-full">
      <SectionTitle>Categories</SectionTitle>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 w-full">
        {categories.map((category) => {
          return <CategoriesItem key={category.slug} category={category} />;
        })}
      </div>
    </Wrapper>
  );
}
