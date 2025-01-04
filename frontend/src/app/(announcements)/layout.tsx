import { Nav } from "@/components/Navbar/Nav";

export default function AnnouncementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
