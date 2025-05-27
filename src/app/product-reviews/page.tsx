import { Product } from "@/components/products";
import { Reviews } from "@/components/reviews";

export default function ProductReviewsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-34 bg-amber-800 text-white">
      <h1 className="text-4xl">Product Reviews</h1>
     <Product/>
     <Reviews/>
    
    </div>
  );
}