import BranchAndMapSection from "./contact/BranchAndMapSection";
import BranchIntroSection from "./contact/BranchIntroSection";
import ContactInfoSection from "./contact/ContactInfoSection";
import FAQSection from "./home/FAQSection";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <header className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full opacity-30 bg-cover bg-center"
            data-alt="A macro close-up of a high-quality dark navy textile weave showing intricate thread patterns and precision stitching. The lighting is dramatic and moody, emphasizing the structural integrity and professional quality of the fabric. The overall aesthetic is industrial yet luxurious, reflecting the tailored excellence of Aurix Uniforms."
          ></div>
          <div className="absolute inset-0 bg-linear-to-b from-primary-container/60 to-primary-container"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-display-lg text-display-lg-mobile text-on-primary mb-4 md:text-display-lg tracking-tight">
            Liên Hệ
          </h1>
          <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl mx-auto opacity-90">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Liên hệ ngay để
            được tư vấn miễn phí.
          </p>
        </div>
      </header>
      <ContactInfoSection />
      <BranchAndMapSection />
      <BranchIntroSection />
      <FAQSection />
    </main>
  );
};

export default Contact;
