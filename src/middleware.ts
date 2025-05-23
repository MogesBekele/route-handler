import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("hello", request.nextUrl));
  }
  // return NextResponse.redirect(new URL('/', request.url));
}
export const config = {
  matcher: "/profile",
};
