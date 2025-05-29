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
    <div>
      <h1>Product DB</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}