"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { categories, sizes } from "@/lib/data";

export function ShopSidebar() {
  return (
    <div className="w-full">
      <Accordion type="multiple" defaultValue={["category", "size"]}>
        <AccordionItem value="category">
          <AccordionTrigger className="text-lg font-headline">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger className="text-lg font-headline">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label
                    htmlFor={`size-${size}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
