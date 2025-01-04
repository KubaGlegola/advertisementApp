import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AccessDeniedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
      <h1 className="text-4xl font-bold mb-4 ">Access Denied</h1>
      <p className="text-lg text-gray-500">You do not have permission to access this page</p>
      <Image src="/access-denied.png" width={400} height={400} alt="Access Denied" />

      <Link href="/">
        <Button variant="secondary">Home page</Button>
      </Link>
    </div>
  );
}
