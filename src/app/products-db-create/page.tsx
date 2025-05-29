import { Submit } from "@/components/submit";
import { createProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default function AddProductPage() {
  async function addProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await createProduct({ title, price: parseInt(price), description });
    redirect('/product-db');
  }

  return (
    <form action={addProduct} className="bg-gray-50 min-h-screen flex items-center justify-center text-black">
      <div className="bg-gray-50 min-h-screen flex items-center justify-center text-black">
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">
            Create Product
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          <Submit/>
          </div>
        </div>
      </div>
    </form>
  );
}
