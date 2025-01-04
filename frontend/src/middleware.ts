import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/session";

const protectedRoutes: string[] = [];
const adminRoutes = ["/dashboard"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAdminRoute = adminRoutes.includes(path);

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  const validUntil = session?.validUntil as number;

  if (isProtectedRoute && validUntil && validUntil < Date.now()) {
    const response = NextResponse.redirect(new URL("/login", req.nextUrl));
    response.cookies.delete("session");
    return response;
  }

  if (isAdminRoute && session?.role !== "admin") {
    return NextResponse.redirect(new URL("/access-denied", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
