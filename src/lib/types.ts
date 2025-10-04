export type Category = "Tees" | "Outerwear" | "Bottoms" | "Accessories" | "Footwear";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "One Size";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  sizes: Size[];
  image: {
    id: string;
    alt: string;
  };
  altImage: {
    id: string;
    alt: string;
  };
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: Size;
  quantity: number;
};
