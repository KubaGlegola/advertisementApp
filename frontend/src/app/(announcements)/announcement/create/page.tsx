import { AnnouncementForm } from "@/components/Announcements/AnnouncementForm/AnnouncementForm";
import { Wrapper } from "@/components/Shared/Wrapper";
import { CategoryType } from "@/types/category";

export default async function CreateAnnouncementPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, {
    next: { revalidate: 60 * 15 },
  });
  const categories: CategoryType[] = await res.json();

  return (
    <section className="bg-gray-100 w-full py-12 lg:py-16">
      <Wrapper>
        <h2 className="text-3xl font-semibold  mb-6 lg:mb-8">Create Announcement</h2>
        <AnnouncementForm categories={categories} />
      </Wrapper>
    </section>
  );
}
