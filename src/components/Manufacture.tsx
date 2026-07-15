import FAQSection from "./home/FAQSection";
import ProcessSection from "./home/ProcessSection";
import ManufactureAboutSection from "./manufacture/ManufactureAboutSection";
import ManufactureApplySection from "./manufacture/ManufactureApplySection";
import ManufactureProcessDetail from "./manufacture/ManufactureProcessDetail";
import ManufactureWarningSection from "./manufacture/ManufactureWarningSection";
import Hero from "@/assets/hero_sanxuat.webp"

const Manufacture = () => {
  return (
    <main className="min-h-screen">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0"
            alt="A cinematic, high-contrast photograph of a modern garment manufacturing facility. Skilled workers in professional uniforms operate state-of-the-art sewing machines and laser cutting tables. The environment is impeccably clean with bright, neutral industrial lighting that highlights the precision and scale of the operation. The color palette is dominated by deep navy blue and crisp white tones, echoing a sense of tailored excellence and corporate stability."
            src={Hero}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 px-margin-desktop container-max mx-auto">
          <div className="max-w-2xl text-white">
            <span className="text-label-caps font-label-caps bg-secondary px-3 py-1 mb-6 inline-block">
              TIÊU CHUẨN XUẤT KHẨU
            </span>
            <h1 className="font-display-lg text-display-lg mb-6">
              Quy Trình Sản Xuất May Mặc Tiêu Chuẩn
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 border-l-4 border-secondary-container pl-6">
              Tại Aurix, mỗi sản phẩm đồng phục là kết tinh của quy trình sản
              xuất khép kín, ứng dụng công nghệ hiện đại và sự tỉ mỉ của những
              thợ may lành nghề nhất.
            </p>
          </div>
        </div>
      </section>

      <ProcessSection />
      <ManufactureAboutSection />
      <ManufactureProcessDetail />
      <ManufactureApplySection />
      <ManufactureWarningSection />
      <FAQSection />
    </main>
  );
};

export default Manufacture;
