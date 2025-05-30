import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Next.js App</h1>
        <div className="flex items-center gap-4">
          {/* Show when signed out */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors hover:cursor-pointer">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          {/* Show when signed in */}
          <SignedIn>
            <Link
              href="/user-profile"
              className="hover:underline text-white font-medium px-3 py-1 rounded transition-colors hover:bg-blue-700"
            >
              Profile
            </Link>
            <SignOutButton>
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-medium transition-colors hover:cursor-pointer">
                Sign Out
              </button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
