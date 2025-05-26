"use client"
import { useState } from "react";

export default function DashboardPage() {
  const [name, setName]= useState('')
  return (
    <div>
      <h1>dashboard</h1>
      <p>{name}</p>
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} />
   
    </div>
  );
}