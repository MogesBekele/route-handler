"use client";
import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
export const ClientComponentOne = () => {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <h1>Client Component One</h1>
      <ClientComponentTwo/>
     
    </>
  );
}