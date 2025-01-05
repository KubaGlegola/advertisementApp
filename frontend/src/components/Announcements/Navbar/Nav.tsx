import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Wrapper } from "@/components/Shared/Wrapper/Wrapper";

export const Nav = async () => {
  return (
    <header className="z-50 py-4 sticky top-0 bg-teal-950 backdrop-blur-sm nav-border-reveal text-white">
      <Wrapper customClass="flex gap-2 items-center">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className="max-w-full flex flex-shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">Menu</div>
        <div className="mr-3 ml-auto sm:ml-0">Wyszukiwarka</div>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Wrapper>
    </header>
  );
};
