"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CreateProduct(){
  const [title, setTitle] = useState("");
  const [price, setPrice ]= useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const route = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, description }),
      });
      if (response.ok) {
        route.push("/product-db");
      } else {
        console.error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setLoading(false);
    }
  };


  return(
    <form onSubmit={handleSubmit} className="bg-gray-50 min-h-screen flex items-center justify-center text-black">
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">Create Product</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
         
            disabled={loading}
            className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </div>
      </div>

    </form>
  )


}