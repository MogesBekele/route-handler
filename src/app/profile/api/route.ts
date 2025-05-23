import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const headersList = await headers();
  const authHeader = headersList.get("Authorization");

  console.log(authHeader);

  // const theme = request.cookies.get("theme");
  // console.log(theme);
  const cookieStore = await cookies();
  const theme2 = cookieStore.set("result","33");

  console.log(theme2);

  // const requestHearers = new Headers(request.headers);
  // console.log(requestHearers.get('Authorization'));
  return new Response("profile data!",{
    headers:{
      "COntent-Type": "application/json",
      "set-Cookie": "theme=dark",
    }
  });
}
