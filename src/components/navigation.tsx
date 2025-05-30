import { SignInButton } from "@clerk/nextjs"

export const Navigation = () => {
  return(
    <nav>
      <div>
        <div>
          <div>
            <h1>Next js app</h1>
          </div>
          <div>
            {/*sigh in button */}
            <SignInButton mode="modal"/>


          </div>
        </div>
      </div>
   
    </nav>
    
  )
}