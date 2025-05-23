import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {

  const requestHearers = new Headers(request.headers);
  console.log(requestHearers.get('Authorization'));
  return new Response('profile data!');
}