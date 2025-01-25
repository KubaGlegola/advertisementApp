import { Footer } from "@/components/Announcements/Footer/Footer";
import { Nav } from "@/components/Announcements/Navbar/Nav";

export default function AnnouncementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
