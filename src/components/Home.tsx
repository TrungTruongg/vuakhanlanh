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

// const images = Object.values(
//   import.meta.glob("../assets/kl*.webp", { eager: true, import: "default" }),
// ) as string[];

// const products = [
//   {
//     id: 1,
//     tag: "Dòng phổ thông",
//     name: "Khăn Lạnh Quận 1",
//     price: "350đ/khăn",
//     image: images[0],
//   },
//   {
//     id: 2,
//     tag: "Dòng cao cấp",
//     name: "Khăn Lạnh Quận 2",
//     price: "680đ/khăn",
//     image: images[1],
//   },
//   {
//     id: 3,
//     tag: "Dòng eco-friendly",
//     name: "Khăn Lạnh Quận 3",
//     price: "520đ/khăn",
//     image: images[2],
//   },
//   {
//     id: 4,
//     tag: "Dòng premium",
//     name: "Khăn Lạnh Quận 4",
//     price: "380đ/khăn",
//     image: images[3],
//   },
//   {
//     id: 5,
//     tag: "",
//     name: "Khăn Lạnh Quận 5",
//     price: "480đ/khăn",
//     image: images[4],
//   },
//   {
//     id: 6,
//     tag: "",
//     name: "Khăn Lạnh Quận 6",
//     price: "180đ/khăn",
//     image: images[5],
//   },
//   {
//     id: 7,
//     tag: "",
//     name: "Khăn Lạnh Quận 7",
//     price: "220đ/khăn",
//     image: images[6],
//   },
//   {
//     id: 8,
//     tag: "",
//     name: "Khăn Lạnh Quận 8",
//     price: "390đ/khăn",
//     image: images[7],
//   },
// ];

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen">
      <section className="relative w-full h-[85vh]  flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center"
            alt="A group of professional diverse corporate employees wearing high-quality, tailored navy blue and charcoal gray uniforms standing in a bright, minimalist high-ceiling office lobby. The lighting is soft and natural, emphasizing the fine texture of the fabric and the sharp stitching. The overall mood is sophisticated, authoritative, and clean, reflecting a high-end corporate brand identity."
            src={Banner_1}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-4xl">
          <h1 className="text-white font-display-lg text-display-lg mb-6 leading-tight">
            Đồng Phục Aurix - <br />
            <span className="text-secondary-container">
              Nâng Tầm Thương Hiệu
            </span>{" "}
            Doanh Nghiệp
          </h1>
          <p className="text-white/90 font-body-lg text-body-lg mb-10 max-w-2xl">
            Giải pháp đồng phục toàn diện, chất liệu cao cấp nhập khẩu, đường
            may tinh tế đạt tiêu chuẩn xuất khẩu. Mang lại sự tự tin và chuyên
            nghiệp cho đội ngũ của bạn.
          </p>
          <div className="flex gap-4">
            <button onClick={() => navigate("/san-pham")} className="bg-white text-primary font-bold font-label-caps px-8 py-4 rounded shadow-lg cursor-pointer hover:bg-secondary-container transition-all">
              Xem Sản Phẩm
            </button>
            <button onClick={() => navigate("/lien-he")} className="border-2 border-white text-white font-label-caps px-8 py-4 rounded cursor-pointer transition-all">
              Tư Vấn Ngay
            </button>
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
