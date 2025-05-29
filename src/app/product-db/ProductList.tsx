"use client";
import { useOptimistic, useTransition } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type Props = {
  products: Product[];
  onDelete: (id: number) => Promise<void>;
};

export default function ProductList({ products, onDelete }: Props) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (state, id: number) => state.filter((p) => p.id !== id)
  );
  const [isPending, startTransition] = useTransition();

  return (
    <ul className="space-y-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-100 transition-colors flex items-center justify-between"
        >
          <div>
            <span className="font-semibold text-blue-700">{product.title}</span>
            <span className="ml-2">${product.price}</span>
          </div>
          <button
            type="button"
            className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors disabled:opacity-50"
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                setOptimisticProducts(product.id);
                onDelete(product.id);
              });
            }}
          >
            {isPending ? "Deleting..." : "Delete"}
          </button>
        </li>
      ))}
      {isPending && <li className="text-gray-400">Updating...</li>}
    </ul>
  );
}