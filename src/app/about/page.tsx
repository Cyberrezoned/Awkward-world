import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'product-2-b');
  return (
    <div className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-headline text-5xl md:text-7xl">
            We are AWKWARD.
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            AWKWARD was born from a simple, yet powerful idea: fashion should be a form of self-expression, not a means of fitting in. We believe in the beauty of the unconventional, the allure of the asymmetrical, and the power of a statement piece that whispers (or screams) your story.
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            Our designs are a conversation, a playful jab at the polished perfection of high fashion. We embrace the glitches, the deconstructed dreams, and the beautifully chaotic energy of individuality. Each piece is crafted not just to be worn, but to be lived in, to be a part of your narrative.
          </p>
           <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            So yes, maybe it's a bit awkward. But it works. Welcome to the fold.
          </p>
        </div>
        <div>
            {aboutImage && (
                <div className="aspect-[3/4] bg-muted">
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        width={600}
                        height={800}
                        className="h-full w-full object-cover"
                        data-ai-hint={aboutImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
