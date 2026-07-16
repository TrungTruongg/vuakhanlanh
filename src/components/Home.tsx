import Banner_1 from "@/assets/banner_1.webp";
import ProductShowcase from "@/components/home/ProductShowcase";
// import CertificatesSection from "@/components/home/CertificateSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import StatsSection from "@/components/home/StatsSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import ProcessSection from "@/components/home/ProcessSection";
// import QualityAssuranceSection from "@/components/home/QualityAssuranceSection";
import ContactSection from "@/components/home/ContactSection";
// import TrendsSection from "@/components/home/TrendsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OrderProcessSection from "@/components/home/OrderProcessSection";
import AgentProgramSection from "@/components/home/AgentProgramSection";
import FAQSection from "@/components/home/FAQSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import { useNavigate } from "react-router-dom";
// import ProductLinesSection from "@/components/home/ProductLinesSection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen">
      <section className="relative h-[70vh] flex items-center overflow-hidden ">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="Đội ngũ nhân viên mặc đồng phục công sở navy chuyên nghiệp"
            src={Banner_1}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12 sm:py-16 md:py-24 reveal reveal-in">
          <div className="z-10 reveal reveal-left reveal-in" data-reveal="off">
            <h1 className="text-white font-display-lg-mobile text-display-lg-mobile mb-3 sm:mb-4 md:mb-6 leading-tight">
              Đồng Phục Aurix - <br />
              <span className="text-secondary-container">
                Nâng Tầm Thương Hiệu
              </span>{" "}
              Doanh Nghiệp
            </h1>
            <p className="text-white/90 font-body-lg text-sm sm:text-base mb-5 sm:mb-6 md:mb-10 max-w-2xl md:text-lg lg:text-xl xl:text-2xl line-clamp-3 sm:line-clamp-none">
              Giải pháp đồng phục toàn diện, chất liệu cao cấp nhập khẩu, đường
              may tinh tế đạt tiêu chuẩn xuất khẩu. Mang lại sự tự tin và chuyên
              nghiệp cho đội ngũ của bạn.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4">
              <button
                onClick={() => navigate("/san-pham")}
                className="bg-white text-primary font-bold font-label-caps px-6 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base rounded shadow-lg cursor-pointer transition-all"
              >
                Xem Sản Phẩm
              </button>
              <button
                onClick={() => navigate("/lien-he")}
                className="border-2 border-white text-white font-label-caps px-6 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base rounded cursor-pointer transition-all"
              >
                Tư Vấn Ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase />
      {/* <CertificatesSection /> */}
      <CoreValuesSection />
      <StatsSection />
      <AboutUsSection />
      <ProcessSection />
      {/* <ProductLinesSection /> */}
      <WhyChooseUsSection />
      {/* <QualityAssuranceSection />
      <TrendsSection /> */}
      <TestimonialsSection />
      <OrderProcessSection />
      <AgentProgramSection />

      <ContactSection />
      <FAQSection />
    </main>
  );
};

export default Home;
