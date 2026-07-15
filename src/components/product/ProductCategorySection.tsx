const ProductCategorySection = () => {
  return (
    <section className="py-24 px-margin-desktop overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">
            Danh Mục Sản Phẩm
          </h1>
          <div className="h-1 w-24 bg-secondary-container mx-auto"></div>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-label-caps font-label-caps text-outline">
            Lọc theo:
          </span>
          <button className="px-6 py-2 bg-primary text-white rounded-lg text-label-caps font-label-caps">
            Tất cả
          </button>
          <button className="px-6 py-2 border border-outline-variant hover:border-primary transition-colors text-label-caps font-label-caps">
            Áo thun
          </button>
          <button className="px-6 py-2 border border-outline-variant hover:border-primary transition-colors text-label-caps font-label-caps">
            Áo sơ mi
          </button>
          <button className="px-6 py-2 border border-outline-variant hover:border-primary transition-colors text-label-caps font-label-caps">
            Quần tây
          </button>
          <button className="px-6 py-2 border border-outline-variant hover:border-primary transition-colors text-label-caps font-label-caps">
            Vest
          </button>
          <button className="px-6 py-2 border border-outline-variant hover:border-primary transition-colors text-label-caps font-label-caps">
            Đồ bảo hộ
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;
