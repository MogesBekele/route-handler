import { cookies } from "next/headers"

export default function AboutPage(){
  const cookieStore = cookies()
const cookieValue = cookieStore.get('name')
  console.log(cookieValue)
  return(

    <div>
      <h1>this is about page</h1>
    </div>
  )
}