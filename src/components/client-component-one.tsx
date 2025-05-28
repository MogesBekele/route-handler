"use client";
import { useState } from "react";
export const ClientComponentOne = () => {
  const [name, setName] = useState("John Doe");
  return (
    <div>
      <h1>Client Component One</h1>
     
    </div>
  );
}