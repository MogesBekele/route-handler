import { SignInButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Next.js App</h1>
        <div className="flex items-center gap-4">
          {/* Sign In Button */}
          <SignInButton mode="modal" />
          {/* Sign Out Button */}
         <Link href="/user-profile">Profile</Link>
          <SignOutButton />
        </div>
      </div>
    </nav>
  );
};
