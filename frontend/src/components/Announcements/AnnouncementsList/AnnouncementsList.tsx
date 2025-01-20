import { AnnouncementsListItem } from "@/components/Announcements/AnnouncementsList/AnnouncementsListItem";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { Wrapper } from "@/components/Shared/Wrapper";

const DUMMY_ANNOUCEMENTS = [
  {
    id: "1",
    title: "Bike for sale",
    price: 240.2,
    date: "2022-09-15",
    image: "/exampleAdIcon.png",
    category: "Bikes",
  },
  {
    id: "2",
    title: "Car for sale",
    price: 100.12,
    date: "2022-09-15",
    image: "/exampleAdIcon.png",
    category: "Bikes",
  },
  {
    id: "3",
    title: "House for sale",
    price: 1200.2,
    date: "2022-09-15",
    image: "/exampleAdIcon.png",
    category: "Bikes",
  },
  {
    id: "4",
    title: "House for sale",
    price: 500,
    date: "2022-09-15",
    image: "/exampleAdIcon.png",
    category: "Bikes",
  },
  {
    id: "5",
    title: "House for sale",
    price: 240,
    date: "2022-09-15",
    image: "/exampleAdIcon.png",
    category: "Bikes",
  },
  {
    id: "6",
    title: "House for sale",
    price: 100,
    date: "2022-09-15",
    image: "/exampleAdIcon.png",
    category: "Bikes",
  },
];

export function AnnouncementsList() {
  return (
    <div className="w-full py-12 lg:py-16">
      <Wrapper>
        <SectionTitle>Newest Ads</SectionTitle>
        <div className="grid lg:grid-cols-2 gap-4">
          {DUMMY_ANNOUCEMENTS.map((announcement) => {
            return <AnnouncementsListItem key={announcement.id} announcement={announcement} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
}
