"use client"

import { useState } from "react";
import { Product, Size } from "@/lib/types";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

interface AddToCartFormProps {
    product: Product;
}

export function AddToCartForm({ product }: AddToCartFormProps) {
    const { addToCart } = useCart();
    const { toast } = useToast();
    const [selectedSize, setSelectedSize] = useState<Size | undefined>(product.sizes[0]);

    const primaryImage = PlaceHolderImages.find(p => p.id === product.image.id);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedSize) {
            toast({
                title: "Please select a size",
                variant: "destructive",
            })
            return;
        }
        if (primaryImage) {
            addToCart(product, selectedSize, primaryImage.imageUrl);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
                <h3 className="font-headline text-xl">Size</h3>
                <RadioGroup 
                    value={selectedSize} 
                    onValueChange={(value: Size) => setSelectedSize(value)}
                    className="flex flex-wrap gap-2"
                >
                    {product.sizes.map(size => (
                        <div key={size}>
                            <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                            <Label 
                                htmlFor={`size-${size}`}
                                className="flex cursor-pointer items-center justify-center border p-4 h-12 w-16 text-center text-sm font-medium uppercase hover:bg-muted/50 data-[state=checked]:border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                                data-state={selectedSize === size ? 'checked' : 'unchecked'}
                            >
                                {size}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
            <Button type="submit" size="lg" className="w-full mt-6">
                Add to Bag
            </Button>
        </form>
    )
}
