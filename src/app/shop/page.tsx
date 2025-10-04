import { ProductCard } from "@/components/product/product-card";
import { ShopSidebar } from "@/components/shop/shop-sidebar";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="container py-8">
      <h1 className="font-headline text-4xl mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <aside>
            <ShopSidebar />
        </aside>
        <main>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
