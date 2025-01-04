export default async function EditCategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug;

  const res = await fetch(`http://localhost:5000/category/${categorySlug}`);
  const category = await res.json();

  console.log(category);

  return <div>{categorySlug}</div>;
}
