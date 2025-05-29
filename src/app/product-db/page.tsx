import { getProducts } from "@/prisma-db"
type Product ={
  id: number;
  title: string;
  price: number;
  description: string;
}

export default async function ProductDB() {
  await new Promise((resolve)=>{setTimeout(resolve, 2000)});
  const products: Product[] = await getProducts();

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">Product DB</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-100 transition-colors"
          >
            <span className="font-semibold text-blue-700">{product.title}</span>
            <span className="ml-2">${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}