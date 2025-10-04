"use client";

import { useEffect } from "react";
import { trackProductView } from "@/lib/recommendations";

interface ProductViewTrackerProps {
  productId: string;
}

export function ProductViewTracker({ productId }: ProductViewTrackerProps) {
  useEffect(() => {
    trackProductView(productId);
  }, [productId]);

  return null;
}
