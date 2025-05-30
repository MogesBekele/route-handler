import { getProducts, deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductDB({searchParams}:{searchParams:Promise<{query?:string}>}) {
  const { query } = await searchParams;
  await new Promise((resolve) => { setTimeout(resolve, 2000); });
  const products: Product[] = await getProducts(query);

  async function handleDelete(formData: FormData) {
    "use server";
    const id = formData.get("id");
    if (id) {
      await deleteProduct(Number(id));
      revalidatePath("/product-db");
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">Product DB</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-100 transition-colors flex items-center justify-between"
          >
            <div>
              <span className="font-semibold text-blue-700">{product.title}</span>
              <span className="ml-2">${product.price}</span>
            </div>
            <form action={handleDelete}>
              <input type="hidden" name="id" value={product.id} />
              <button
                type="submit"
                className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}