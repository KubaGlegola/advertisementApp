import { CategoryType } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

export function CategoriesItem({ category }: { category: CategoryType }) {
  return (
    <Link href="/" className="flex flex-col items-center gap-4 w-28 text-center">
      <Image
        className="w-[100px] h-[100px]"
        src={`${process.env.BACKEND_URL}/${category.image}`}
        alt={category.name}
        width={100}
        height={100}
      />
      <span>{category.name}</span>
    </Link>
  );
}
