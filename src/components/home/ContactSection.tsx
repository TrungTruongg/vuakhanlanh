const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-white text-on-surface">
      <div className="max-w-container-max mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-3 sm:mb-4 text-on-surface">
          Liên Hệ Tư Vấn
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant">
          Hãy để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ tư vấn và
          gửi báo giá trong 24h.
        </p>
      </div>
      <form className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label className="text-label-caps mb-2 block text-on-surface-variant">
              Họ và Tên
            </label>
            <input
              className="w-full bg-white border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 text-sm sm:text-base"
              placeholder="Nhập tên của bạn"
              type="text"
            />
          </div>
          <div>
            <label className="text-label-caps mb-2 block text-on-surface-variant">
              Số Điện Thoại
            </label>
            <input
              className="w-full bg-white border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 text-sm sm:text-base"
              placeholder="090x xxx xxx"
              type="tel"
            />
          </div>
        </div>
        <div>
          <label className="text-label-caps mb-2 block text-on-surface-variant">
            Email Doanh Nghiệp
          </label>
          <input
            className="w-full bg-white border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 text-sm sm:text-base"
            placeholder="example@company.com"
            type="email"
          />
        </div>
        <div>
          <label className="text-label-caps mb-2 block text-on-surface-variant">
            Nội Dung Cần Tư Vấn
          </label>
          <textarea
            className="w-full bg-white border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50 text-sm sm:text-base"
            placeholder="Số lượng, loại đồng phục, yêu cầu đặc biệt..."
            rows={4}
          ></textarea>
        </div>
        <button
          className="w-full bg-primary cursor-pointer text-on-primary font-label-caps py-3.5 sm:py-4 rounded font-bold hover:brightness-110 transition-all"
          type="submit"
        >
          Gửi Yêu Cầu Tư Vấn
        </button>
      </form>
    </section>
  );
};
 
export default ContactSection;