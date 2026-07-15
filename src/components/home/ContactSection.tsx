const ContactSection = () => {
  return (
    <section className="py-24 px-margin-desktop bg-white text-on-surface">
      <div className="max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-display-lg text-display-lg mb-4 text-on-surface">
          Liên Hệ Tư Vấn
        </h2>
        <p className="text-on-surface-variant">
          Hãy để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ tư vấn và
          gửi báo giá trong 24h.
        </p>
      </div>
      <form className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-label-caps mb-2 block text-on-surface-variant">
              Họ và Tên
            </label>
            <input
              className="w-full bg-surface-container-low border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50"
              placeholder="Nhập tên của bạn"
              type="text"
            />
          </div>
          <div>
            <label className="text-label-caps mb-2 block text-on-surface-variant">
              Số Điện Thoại
            </label>
            <input
              className="w-full bg-surface-container-low border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50"
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
            className="w-full bg-surface-container-low border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50"
            placeholder="example@company.com"
            type="email"
          />
        </div>
        <div>
          <label className="text-label-caps mb-2 block text-on-surface-variant">
            Nội Dung Cần Tư Vấn
          </label>
          <textarea
            className="w-full bg-surface-container-low border border-outline/30 rounded px-4 py-3 focus:outline-none focus:border-primary text-on-surface placeholder:text-on-surface-variant/50"
            placeholder="Số lượng, loại đồng phục, yêu cầu đặc biệt..."
            rows={4}
          ></textarea>
        </div>
        <button
          className="w-full bg-primary cursor-pointer text-on-primary font-label-caps py-4 rounded font-bold hover:brightness-110 transition-all"
          type="submit"
        >
          Gửi Yêu Cầu Tư Vấn
        </button>
      </form>
    </section>
  );
};

export default ContactSection;