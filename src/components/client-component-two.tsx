"use client";
import { useState } from "react";
export const ClientComponentTwo = () => {
  const [name, setName] = useState("John Doe");
  return (
    <div>
      <h1>Client Component two</h1>
     
    </div>
  );
}