const categories = ["Tất cả", "Áo thun", "Áo sơ mi", "Quần tây", "Vest", "Đồ bảo hộ"];

const ProductCategorySection = () => {
  return (
    <section className="py-10 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">
            Danh Mục Sản Phẩm
          </h1>
          <div className="h-1 w-24 bg-secondary-container mx-auto"></div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center sm:justify-start">
          <span className="text-label-caps font-label-caps text-outline text-xs sm:text-sm w-full sm:w-auto text-center sm:text-left mb-1 sm:mb-0">
            Lọc theo:
          </span>
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={
                i === 0
                  ? "px-4 sm:px-6 py-1.5 sm:py-2 bg-primary text-white text-xs sm:text-sm font-label-caps"
                  : "px-4 sm:px-6 py-1.5 sm:py-2 border border-outline-variant hover:border-primary transition-colors text-xs sm:text-sm font-label-caps"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;