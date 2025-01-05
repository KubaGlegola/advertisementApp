import { AnnouncementsList } from "@/components/Announcements/AnnouncementsList/AnnouncementsList";
import { CategoriesList } from "@/components/Announcements/Categories/CategoriesList/CategoriesList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-24">
      <div>Wyszukiwarka</div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesList />
      </Suspense>

      <AnnouncementsList />
    </main>
  );
}
