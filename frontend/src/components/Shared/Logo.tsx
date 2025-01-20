import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="" width={40} height={40} />
      <span className="text-white font-semibold text-2xl">Adlisting.</span>
    </Link>
  );
}
