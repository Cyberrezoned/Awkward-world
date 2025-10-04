import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PersonalizedRecommendations from '@/components/recommendations/personalized-recommendations';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main');
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative h-[calc(100vh-5rem)] w-full">
        {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
             />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl">
            Define Your Awkward
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            A high-fashion brand that celebrates nonconformity.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-8 text-center font-headline text-4xl md:text-5xl">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-center font-headline text-4xl md:text-5xl">
              Just For You
            </h2>
            <p className="text-lg text-muted-foreground mt-2">✨ Styled by AI, inspired by your taste ✨</p>
          </div>
          <PersonalizedRecommendations />
        </div>
      </section>
    </div>
  );
}
