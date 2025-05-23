import { headers } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {

  const headersList =await headers();
  const authHeader = headersList.get('Authorization');

  console.log(authHeader)

  // const requestHearers = new Headers(request.headers);
  // console.log(requestHearers.get('Authorization'));
  return new Response('profile data!');
}