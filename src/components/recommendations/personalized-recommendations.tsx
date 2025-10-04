"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/types";
import { getPersonalizedRecommendations } from "@/app/actions";
import { getBrowsingHistory } from "@/lib/recommendations";
import { ProductCard } from "../product/product-card";
import { Skeleton } from "../ui/skeleton";

export default function PersonalizedRecommendations() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      const history = getBrowsingHistory();
      if (history.length > 0) {
        const recommendedProducts = await getPersonalizedRecommendations(history);
        setRecommendations(recommendedProducts);
      }
      setLoading(false);
    }

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[3/4] w-full" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-5 w-1/2" />
                </div>
            ))}
        </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        <p>Browse some products to see personalized recommendations here!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {recommendations.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
