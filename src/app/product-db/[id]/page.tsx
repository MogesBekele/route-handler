import { Submit } from "@/components/submit";
import { getProductById, updateProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(parseInt(id));

  async function editProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    await updateProduct(parseInt(id), { title, price: parseInt(price), description });
    redirect('/product-db');
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-xl">Product not found.</div>
      </div>
    );
  }

  return (
    <form action={editProduct} className="bg-gray-50 min-h-screen flex items-center justify-center text-black">
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg w-full">
        <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">
          Edit Product
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={product.title}
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
              defaultValue={product.price}
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
              defaultValue={product.description}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <Submit />
        </div>
      </div>
    </form>
  );
}
