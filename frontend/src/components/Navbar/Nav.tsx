import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Nav = async () => {
  return (
    <header className="z-50 py-4 sticky top-0 bg-red-400 backdrop-blur-sm nav-border-reveal">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 flex-row sm:px-6 lg:px-8">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className="max-w-full flex flex-shrink w-auto sm:mr-auto overflow-auto max-sm:order-2">
          Menu
        </div>
        <div className="mr-3 ml-auto sm:ml-0">Wyszukiwarka</div>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
