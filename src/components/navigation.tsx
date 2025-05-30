import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Next.js App</h1>
        <div className="flex items-center gap-4">
          {/* Sign In Button */}
          <SignInButton mode="modal">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors">
              Sign In
            </button>
          </SignInButton>

          {/* Sign Out Button */}
          <Link href="/user-profile">Profile</Link>
         
         
        
        </div>
      </div>
    </nav>
  );
};
