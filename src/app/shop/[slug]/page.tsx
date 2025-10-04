import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AddToCartForm } from '@/components/cart/add-to-cart-form';
import { ProductViewTracker } from '@/components/recommendations/product-view-tracker';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  const primaryImage = PlaceHolderImages.find(p => p.id === product.image.id);
  const secondaryImage = PlaceHolderImages.find(p => p.id === product.altImage.id);

  return (
    <div className="container py-8 md:py-12">
      <ProductViewTracker productId={product.id} />
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
            {primaryImage && (
                <div className="col-span-2 aspect-[3/4] bg-muted">
                    <Image 
                        src={primaryImage.imageUrl}
                        alt={primaryImage.description}
                        width={800}
                        height={1067}
                        className="h-full w-full object-cover"
                        data-ai-hint={primaryImage.imageHint}
                        priority
                    />
                </div>
            )}
            {secondaryImage && (
                 <div className="col-span-2 aspect-[3/4] bg-muted">
                    <Image 
                        src={secondaryImage.imageUrl}
                        alt={secondaryImage.description}
                        width={800}
                        height={1067}
                        className="h-full w-full object-cover"
                        data-ai-hint={secondaryImage.imageHint}
                    />
                </div>
            )}
        </div>

        <div className="flex flex-col">
          <h1 className="font-headline text-4xl lg:text-5xl">{product.name}</h1>
          <p className="mt-2 text-2xl text-muted-foreground">${product.price.toFixed(2)}</p>
          <Separator className="my-6" />
          
          <AddToCartForm product={product} />

          <Separator className="my-6" />

          <div className="space-y-4 text-foreground/80">
            <h3 className="font-headline text-xl">Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
