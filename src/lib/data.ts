import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'chromatic-chaos-tee',
    name: 'Chromatic Chaos Tee',
    description: "An oversized tee that's as comfortable as it is chaotic. Made from 100% heavy-duty cotton.",
    price: 45.00,
    category: 'Tees',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: { id: 'product-1-a', alt: "Front view of the 'Chromatic Chaos' oversized tee." },
    altImage: { id: 'product-1-b', alt: "Model wearing the 'Chromatic Chaos' oversized tee." },
  },
  {
    id: 'deconstructed-dream-blazer',
    name: 'Deconstructed Dream Blazer',
    description: "Business on the top, party everywhere else. This blazer features asymmetrical cuts and exposed seams.",
    price: 175.00,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L'],
    image: { id: 'product-2-a', alt: "Front view of the 'Deconstructed Dream' blazer." },
    altImage: { id: 'product-2-b', alt: "Model wearing the 'Deconstructed Dream' blazer." },
  },
  {
    id: 'glitch-midi-skirt',
    name: 'Glitch Midi Skirt',
    description: "A silky, asymmetrical midi skirt with a 'glitched' print. Perfect for making a statement without saying a word.",
    price: 85.00,
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L'],
    image: { id: 'product-3-a', alt: "Asymmetrical 'Glitch' skirt." },
    altImage: { id: 'product-3-b', alt: "Model wearing the 'Glitch' skirt." },
  },
  {
    id: 'echo-chamber-jeans',
    name: 'Echo Chamber Jeans',
    description: "Wide-leg, echo-wash jeans that look like they've seen things. Features a high waist and a relaxed fit.",
    price: 120.00,
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: { id: 'product-4-a', alt: "'Echo Chamber' echo-wash jeans." },
    altImage: { id: 'product-4-b', alt: "Model wearing the 'Echo Chamber' jeans." },
  },
  {
    id: 'static-shift-dress',
    name: 'Static Shift Dress',
    description: "A dress that's anything but static. Features a unique, shifting pattern and a structured, avant-garde silhouette.",
    price: 210.00,
    category: 'Outerwear', // It's a dress, but can be outerwear
    sizes: ['S', 'M', 'L'],
    image: { id: 'product-5-a', alt: "'Static Shift' dress." },
    altImage: { id: 'product-5-b', alt: "Model wearing the 'Static Shift' dress." },
  },
  {
    id: 'vaporwave-trench-coat',
    name: 'Vaporwave Trench Coat',
    description: "A classic trench with an iridescent, vaporwave-inspired sheen. Water-resistant and guaranteed to turn heads.",
    price: 250.00,
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    image: { id: 'product-6-a', alt: "'Vaporwave' trench coat." },
    altImage: { id: 'product-6-b', alt: "Model wearing the 'Vaporwave' trench coat." },
  },
  {
    id: 'binary-boots',
    name: 'Binary Boots',
    description: "Chunky platform boots with a statement zipper. Made from vegan leather. They're a 1s and 0s in a world of maybes.",
    price: 180.00,
    category: 'Footwear',
    sizes: ['S', 'M', 'L'], // Shoe sizes would be numbers, but we use S/M/L for demo
    image: { id: 'product-7-a', alt: "'Binary' boots." },
    altImage: { id: 'product-7-b', alt: "Model wearing the 'Binary' boots." },
  },
  {
    id: 'glitch-garden-hoodie',
    name: 'Glitch Garden Hoodie',
    description: "A classic hoodie corrupted by a beautiful glitch. Soft fleece interior, with a distorted floral graphic.",
    price: 95.00,
    category: 'Tees', // A hoodie can be grouped with tees
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: { id: 'product-8-a', alt: "'Glitch Garden' floral hoodie." },
    altImage: { id: 'product-8-b', alt: "Model wearing 'Glitch Garden' floral hoodie." },
  },
];

export const categories = [
  'Tees',
  'Outerwear',
  'Bottoms',
  'Accessories',
  'Footwear'
];

export const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];
