import { AnnouncementsList } from "@/components/Announcements/AnnouncementsList/AnnouncementsList";
import { CategoriesList } from "@/components/Announcements/Categories/CategoriesList/CategoriesList";
import { Hero } from "@/components/Announcements/HomePage/Hero/Hero";
import { HowItWorksSection } from "@/components/Announcements/HomePage/HowItWorks/HowItWorksSection";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesList />
      </Suspense>
      <HowItWorksSection />
      <AnnouncementsList />
    </main>
  );
}
