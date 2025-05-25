"use client";
import React, { useState, useEffect } from "react";

export default function FetchDataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 10)))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);

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