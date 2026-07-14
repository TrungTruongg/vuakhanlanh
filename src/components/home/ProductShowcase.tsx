type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
};

export default function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-headline-xl font-headline-xl mb-12">
          Các mẫu <span className="text-primary">khăn lạnh</span> cao cấp
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-border-subtle overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-[13px] uppercase text-primary font-bold tracking-wide">
                  {product.tag}
                </span>
                <h4 className="text-headline-sm font-bold font-headline-sm mt-1 mb-1">
                  {product.name}
                </h4>
                <p className="text-sm text-on-surface-variant mb-3">
                  {product.price}
                </p>
                <button className="cursor-pointer w-full bg-primary/10 text-primary font-semibold text-sm py-2 rounded-lg hover:bg-primary/20 transition-colors">
                  Chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
