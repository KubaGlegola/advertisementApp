import { AnnouncementsList } from "@/components/Announcements/AnnouncementsList/AnnouncementsList";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function AnnouncementsPage({ searchParams }: { searchParams: SearchParams }) {
  const { search } = searchParams;

  return <div className="py-10">{search}</div>;
}
