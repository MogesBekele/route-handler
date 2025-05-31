import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage(){


  const authObject = await auth()
  const userObject = await currentUser()

  return(
    <div>
      <h1>dashboard</h1>
    </div>
  )
}