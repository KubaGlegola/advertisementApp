import { Wrapper } from "@/components/Shared/Wrapper";

export default async function AnnouncementPage({ params }: { params: Promise<{ id: string }> }) {
  const announcementId = (await params).id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/announcement/${announcementId}`);

  const announcement = await res.json();

  return (
    <section className="bg-gray-100 w-full py-12 lg:py-16">
      <Wrapper>{JSON.stringify(announcement)}</Wrapper>
    </section>
  );
}
