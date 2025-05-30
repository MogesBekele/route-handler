import { Search } from "@/components/search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-8">
      <div className="bg-white/80 rounded-xl shadow-lg p-10 flex flex-col items-center max-w-xl w-full">
        <Search />
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          className="mb-8 mt-8"
        />
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 text-center drop-shadow">
          Welcome to Next.js!
        </h1>
        <p className="mt-2 mb-8 text-lg text-gray-700 text-center">
          This is a simple Next.js application with a custom page.
        </p>
      </div>
    </main>
  );
}
