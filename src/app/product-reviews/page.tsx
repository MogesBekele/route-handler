import { Product } from "@/components/products";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductReviewsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-34 bg-amber-800 text-white">
      <h1 className="text-4xl">Product Reviews</h1>
      <Suspense fallback={<div>Loading Product...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading Reviews...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
