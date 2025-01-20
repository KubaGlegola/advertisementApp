import { CategoryType } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

export function CategoriesItem({ category }: { category: CategoryType }) {
  return (
    <Link
      href={`/announcements?category=${category.slug}`}
      className="flex flex-col items-center gap-4 w-full text-center p-6 rounded-md hover:shadow-lg  transition-shadow duration-300"
    >
      <div className="p-4 bg-primary-50 rounded-full shadow-sm shadow-primary-50">
        <Image
          className="w-9 h-9 "
          src={`${process.env.BACKEND_URL}/${category.image}`}
          alt={category.name}
          width={36}
          height={36}
        />
      </div>
      <span className="text-grayscale-900 text-md lg:text-xl font-semibold">{category.name}</span>
    </Link>
  );
}
