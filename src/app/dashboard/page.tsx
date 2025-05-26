"use client"
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName]= useState('')
  return (
    <div className="flex flex-col items-center justify-center min-h-34 bg-amber-800 text-white">
      <h1 className="">dashboard</h1>
      <p>{name}</p>
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
   
    </div>
  );
}