import FAQSection from "../home/FAQSection";
import ProductCategorySection from "./ProductCategorySection";
import ProductDisplaySection from "./ProductDisplaySection.tsx";
import ProductMaterialSection from "./ProductMaterialSection.tsx.tsx";
import ReferenceDocumentsSection from "./ReferenceDocumentsSection";

const ProductLayout = () => {
  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-auto sm:py-12 md:py-16">
      <ProductCategorySection />
      <ProductDisplaySection />
      <ProductMaterialSection />
      <FAQSection />
      <ReferenceDocumentsSection />
    </main>
  );
};

export default ProductLayout;
