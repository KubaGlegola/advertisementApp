import { Wrapper } from "@/components/Shared/Wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { SearchParams } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function CreateAnnouncementSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { announcementId } = searchParams;
  return (
    <section className="bg-gray-100 w-full py-12 lg:py-16">
      <Wrapper customClass="bg-white shadow-lg p-8 lg:p-12 rounded-lg text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4">Announcement created successfully!</h2>
        <Image
          className="my-8"
          src="/announcementSuccess.svg"
          width={300}
          height={300}
          alt="Announcement created successfully"
        />
        <Link
          className={`${buttonVariants({ variant: "default" })} mb-4`}
          href={`/announcement/${announcementId}`}
        >
          View Announcement
        </Link>
        <Link className={buttonVariants({ variant: "link" })} href="/">
          Back to Home
        </Link>
      </Wrapper>
    </section>
  );
}
