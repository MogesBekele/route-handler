"use client";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export default function DashboardPage() {
  const [name, setName] = useState("");
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-34 bg-amber-800 text-white">
      <h1 className="text-4xl">dashboard</h1>
      <p>{name}</p>
      <input
        className="bg-white text-black px-2 py-1 rounded mt-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h1 style={{ color: theme.colors.primary }} className="mt-4">
        this to check the theme color
      </h1>
    </div>
  );
}