
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useCart } from '@/hooks/use-cart';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  
  const primaryImage = PlaceHolderImages.find(p => p.id === product.image.id);
  const secondaryImage = PlaceHolderImages.find(p => p.id === product.altImage.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if(primaryImage) {
      addToCart(product, product.sizes[0], primaryImage.imageUrl);
    }
  };

  return (
    <Link 
      href={`/shop/${product.id}`} 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
        {primaryImage && (
          <Image
            src={primaryImage.imageUrl}
            alt={primaryImage.description}
            width={600}
            height={800}
            className={cn(
              "h-full w-full object-cover object-center transition-opacity duration-300",
              isHovered ? "opacity-0" : "opacity-100"
            )}
            data-ai-hint={primaryImage.imageHint}
          />
        )}
        {secondaryImage && (
          <Image
            src={secondaryImage.imageUrl}
            alt={secondaryImage.description}
            width={600}
            height={800}
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            data-ai-hint={secondaryImage.imageHint}
          />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button onClick={handleAddToCart} variant="secondary" className="text-secondary-foreground">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Bag - ${product.price.toFixed(2)}
          </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        </div>
      </div>
    </Link>
  );
}
