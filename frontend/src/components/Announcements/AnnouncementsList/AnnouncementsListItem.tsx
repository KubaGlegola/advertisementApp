import Image from "next/image";
import Link from "next/link";

export function AnnouncementsListItem({ announcement }: { announcement: any }) {
  return (
    <Link href="#" className="border-2 border-gray-50 rounded-md grid grid-cols-3">
      <div className="h-full w-full">
        <Image
          src={announcement.image}
          alt={announcement.title}
          width={220}
          height={220}
          className="object-cover h-full w-full "
        />
      </div>
      <div className="col-span-2 p-6">
        <div className="flex gap-2 items-center ">
          <Image src="/stack.svg" alt="" width={20} height={20} />
          <span className="text-grayscale-600">{announcement.category}</span>
        </div>
        <h3 className="font-semibold mt-3 text-grayscale-900">{announcement.title}</h3>
        <div className="flex items-center mt-3">
          <Image src="/clock.svg" alt="" width={16} height={16} />
          <span className="text-grayscale-500 ml-2">{announcement.date}</span>
        </div>
        <div className="flex justify-between mt-6">
          <span className="text-danger-500 text-xl">€{announcement.price}</span>
        </div>
      </div>
    </Link>
  );
}
