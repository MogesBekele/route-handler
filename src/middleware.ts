import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest){
  // return NextResponse.redirect(new URL('/', request.url));

  if(request.nextUrl.pathname==="/profile"){
  return NextResponse.redirect(new URL('hello', request.nextUrl))
}
}
export const config = {
  matcher: "/profile"
}