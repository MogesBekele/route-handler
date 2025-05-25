"use client";
import React, { useState } from "react";
export default async function FetchDataPage() {
  const [data, setData] = useState([])
  
  // Simulate fetching data from an API or database
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      setData(data.slice(0, 10)); // Limit to first 10 items for demonstration
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item: { id: number; title: string }) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}