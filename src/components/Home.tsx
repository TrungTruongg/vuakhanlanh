import Banner_1 from "@/assets/banner_1.webp";
import ProductShowcase from "@/components/home/ProductShowcase";
import CertificatesSection from "@/components/home/CertificateSection";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import StatsSection from "@/components/home/StatsSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import ProcessSection from "@/components/home/ProcessSection";
import QualityAssuranceSection from "@/components/home/QualityAssuranceSection";
import ContactSection from "@/components/home/ContactSection";
import TrendsSection from "@/components/home/TrendsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OrderProcessSection from "@/components/home/OrderProcessSection";
import AgentProgramSection from "@/components/home/AgentProgramSection";
import FAQSection from "@/components/home/FAQSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ProductLinesSection from "@/components/home/ProductLinesSection";

const images = Object.values(
  import.meta.glob("../assets/kl*.webp", { eager: true, import: "default" }),
) as string[];

const products = [
  {
    id: 1,
    tag: "Dòng phổ thông",
    name: "Khăn Lạnh Quận 1",
    price: "350đ/khăn",
    image: images[0],
  },
  {
    id: 2,
    tag: "Dòng cao cấp",
    name: "Khăn Lạnh Quận 2",
    price: "680đ/khăn",
    image: images[1],
  },
  {
    id: 3,
    tag: "Dòng eco-friendly",
    name: "Khăn Lạnh Quận 3",
    price: "520đ/khăn",
    image: images[2],
  },
  {
    id: 4,
    tag: "Dòng premium",
    name: "Khăn Lạnh Quận 4",
    price: "380đ/khăn",
    image: images[3],
  },
  {
    id: 5,
    tag: "",
    name: "Khăn Lạnh Quận 5",
    price: "480đ/khăn",
    image: images[4],
  },
  {
    id: 6,
    tag: "",
    name: "Khăn Lạnh Quận 6",
    price: "180đ/khăn",
    image: images[5],
  },
  {
    id: 7,
    tag: "",
    name: "Khăn Lạnh Quận 7",
    price: "220đ/khăn",
    image: images[6],
  },
  {
    id: 8,
    tag: "",
    name: "Khăn Lạnh Quận 8",
    price: "390đ/khăn",
    image: images[7],
  },
];

const Home = () => {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-surface-mint">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12 sm:py-16 md:py-24 reveal reveal-in">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span className="font-label-caps text-label-caps">
                ISO 9001:2015 CERTIFIED
              </span>
            </div>
            <h1 className="text-display-lg font-display-lg leading-tight text-on-surface">
              Vua Khăn Lạnh —{" "}
              <span className="text-primary">Sản xuất &amp; cung cấp sỉ</span>{" "}
              khăn lạnh uy tín tại Việt Nam
            </h1>
            <p className="text-body-md text-on-surface-variant max-w-lg">
              Chúng tôi luôn lấy chất lượng là tiêu chí quan trọng tạo nên giá
              trị cốt lõi. Aurix — nhà sản xuất khăn lạnh hàng đầu với quy trình
              clinical chuẩn quốc tế.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary cursor-pointer px-10 py-4 rounded-lg text-label-caps hover:scale-105 transition-transform">
                Nhận Ưu Đãi Ngay
              </button>
              <button className="bg-white cursor-pointer border border-primary text-primary px-10 py-4 rounded-lg text-label-caps  hover:scale-105 transition-colors">
                Về Chúng Tôi
              </button>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-140 h-140 object-cover rounded-3xl transition-all duration-700"
              data-alt="A clean, clinical, high-tech factory environment where modern automated machinery is producing pristine white wet towels. The lighting is bright and even, emphasizing a hygienic and professional laboratory atmosphere. The color palette is dominated by whites and soft emerald greens."
              src={Banner_1}
            />

            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl border border-primary/10 shadow-xl z-30 max-w-[320px]">
              <div className="flex items-center text-2xl gap-2 mb-2">
                <span className="material-symbols-outlined text-primary ">
                  check_circle
                </span>
                <span className="font-bold">ISO 9001:2015</span>
              </div>

              <p className="text-body-md text-on-surface-variant">
                Đạt tiêu chuẩn an toàn y tế và chất lượng sản xuất quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase products={products} />
      <CertificatesSection />
      <CoreValuesSection />
      <StatsSection />
      <AboutUsSection />
      <ProcessSection />
      <ProductLinesSection />
      <WhyChooseUsSection />
      <QualityAssuranceSection />
      <TrendsSection />
      <TestimonialsSection />
      <OrderProcessSection />
      <AgentProgramSection />

      <ContactSection />
      <FAQSection />
    </main>
  );
};

export default Home;
