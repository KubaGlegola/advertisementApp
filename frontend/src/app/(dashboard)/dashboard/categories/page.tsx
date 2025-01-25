import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function CategoriesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, { cache: "no-store" });
  const categories = await res.json();

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Button variant="outline">
          <Link href="/dashboard/categories/add" className="flex text-lg gap-2 items-center">
            <Plus className="w-4" />
            Add Category
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {categories.map((category: any) => (
          <Link
            href={`/dashboard/categories/edit/${category.slug}`}
            key={category.slug}
            className="bg-white p-4 shadow rounded-lg"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${category.image}`}
              alt={category.name}
              className="aspect-square w-full max-w-96 mx-auto object-cover object-center rounded-lg"
              width={500}
              height={500}
            />
            <h2 className="text-xl text-center font-semibold mt-4">{category.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}
