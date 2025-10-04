"use server";

import { getPersonalizedRecommendations as getPersonalizedRecommendationsFlow } from "@/ai/flows/personalized-product-recommendations";
import { products } from "@/lib/data";
import { Product } from "@/lib/types";

export async function getPersonalizedRecommendations(
  browsingHistory: string[]
): Promise<Product[]> {
  if (browsingHistory.length === 0) {
    return [];
  }
  
  try {
    const result = await getPersonalizedRecommendationsFlow({
      browsingHistory,
      numberOfRecommendations: 4,
    });
    
    const recommendedProducts = result.recommendations
        .map(id => products.find(p => p.id === id))
        .filter((p): p is Product => p !== undefined);

    return recommendedProducts;
  } catch (error) {
    console.error("Error getting personalized recommendations:", error);
    return [];
  }
}
