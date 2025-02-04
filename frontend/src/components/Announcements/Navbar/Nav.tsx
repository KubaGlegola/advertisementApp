import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Wrapper } from "@/components/Shared/Wrapper";
import { CirclePlus } from "lucide-react";
import { Logo } from "@/components/Shared/Logo";

export const Nav = async () => {
  return (
    <header className="z-50 py-4 sticky w-full top-0 bg-primary-900 backdrop-blur-lg nav-border-reveal text-white">
      <Wrapper customClass="flex gap-2 items-center">
        <Logo />
        <Avatar className="cursor-pointer ml-auto">
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link
          href="/announcement/create"
          className="ml-4 flex items-center gap-2 bg-white text-primary px-5 py-3 font-semibold rounded-md hover:bg-opacity-90 transition-all"
        >
          <CirclePlus size={24} />
          Post an Ad
        </Link>
      </Wrapper>
    </header>
  );
};
