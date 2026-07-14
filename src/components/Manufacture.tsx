import FAQSection from "./home/FAQSection";
import ManufactureAboutSection from "./manufacture/ManufactureAboutSection";
import ManufactureApplySection from "./manufacture/ManufactureApplySection";
import ManufactureProcessDetail from "./manufacture/ManufactureProcessDetail";
import ManufactureProcessSection from "./manufacture/ManufactureProcessSection";
import ManufactureWarningSection from "./manufacture/ManufactureWarningSection";

const Manufacture = () => {
   return (
    <main className="min-h-screen">
      <section className="bg-[#f0fdf4] py-24">
        <div className="max-w-7xl text-center mx-auto px-4">
          <span className="text-primary font-semibold text-base uppercase tracking-wider">
            Quy trình sản xuất
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3 mb-6 text-black reveal reveal-in">
            Sản Xuất Khăn Lạnh Chất Lượng Cao
          </h1>
          <p className="text-black text-justify text-xl max-w-2xl mx-auto reveal reveal-in">
            Dây chuyền sản xuất hiện đại, công nghệ Nano tiên tiến, đạt chuẩn
            ISO 9001:2015. Tất cả vì sản phẩm tốt nhất đến tay người tiêu dùng.
          </p>
        </div>
      </section>
      <div className="h-6 sm:h-8 bg-linear-to-b from-[#f0fdf4] to-white"></div>
      
      <ManufactureProcessSection />
      <ManufactureAboutSection />
      <ManufactureProcessDetail />
      <ManufactureApplySection />
      <ManufactureWarningSection />
      <FAQSection />
    </main>
  );
}

export default Manufacture