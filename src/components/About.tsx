import Hero from "@/assets/hero_about.webp";
import CompanyStorySection from "./about/CompanyStorySection";
import VisionSection from "./about/VisionSection";
import DevelopmentJourneySection from "./about/DevelopmentJourneySection";
import WhyChooseUsSection from "./home/WhyChooseUsSection";
import CertificatesSection from "./home/CertificateSection";

const About = () => {
  return (
    <main className="min-h-screen">
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A cinematic, high-contrast photograph of a modern garment manufacturing facility. Skilled workers in professional uniforms operate state-of-the-art sewing machines and laser cutting tables. The environment is impeccably clean with bright, neutral industrial lighting that highlights the precision and scale of the operation. The color palette is dominated by deep navy blue and crisp white tones, echoing a sense of tailored excellence and corporate stability."
          src={Hero}
        />
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
            Về Chúng Tôi
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl opacity-90">
            Hơn 10 năm kinh nghiệm trong ngành may mặc, chúng tôi định nghĩa lại
            tiêu chuẩn trang phục doanh nghiệp thông qua sự tinh xảo và đổi mới.
          </p>
        </div>
      </section>
      <CompanyStorySection />
      <VisionSection />
      <DevelopmentJourneySection />
      <WhyChooseUsSection />
      <CertificatesSection />
    </main>
  );
};

export default About;
