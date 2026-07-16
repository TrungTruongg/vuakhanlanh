import FAQSection from "../home/FAQSection";
import ProductCategorySection from "./ProductCategorySection";
import ProductDisplaySection from "./ProductDisplaySection.tsx";
import ProductComponentsSection from "./ProductMaterialSection.tsx";
import ReferenceDocumentsSection from "./ReferenceDocumentsSection";

const ProductLayout = () => {
  return (
    <main className="min-h-screen">      
      <ProductCategorySection />
      <ProductDisplaySection />
      <ProductComponentsSection />
      <FAQSection />
      <ReferenceDocumentsSection />
    </main>
  );
};

export default ProductLayout;
