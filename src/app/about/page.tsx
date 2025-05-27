import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore =await cookies();
  const cookieValue = cookieStore.get("name");
  console.log("Cookie value:", cookieValue?.value);

  return (
    <div>
      <h1>this is about page</h1>
      <p>Cookie value: {cookieValue?.value ?? "No cookie set"}</p>
    </div>
  );
}
