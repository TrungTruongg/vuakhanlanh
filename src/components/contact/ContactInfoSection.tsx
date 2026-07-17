const ContactInfoSection = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hotline */}
          <div
            className="bg-white rounded-4xl p-8 rounded-custom shadow-sm border border-surface-dim text-center group hover:shadow-lg hover:scale-105 transition"
            data-purpose="contact-card"
          >
            <div className="w-13 h-13 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-6 bg-primary text-white">
              <span className="material-symbols-outlined ">call</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Hotline</h3>
            <a className="text-xl font-medium text-primary" href="tel:0123456789">
              0123.456.789
            </a>
          </div>
          {/* Email */}
          <div
            className="bg-white rounded-4xl p-8 rounded-custom shadow-sm border border-surface-dim text-center group hover:shadow-lg hover:scale-105 transition"
            data-purpose="email"
          >
            <div className="w-13 h-13 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-6 bg-primary text-white">
              <span className="material-symbols-outlined ">email</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <a
              className="text-xl font-medium text-primary"
              href="mailto:contact@aurix.vn"
            >
              aurixuniform@gmai.com
            </a>
          </div>
          {/* Working Hours */}
          <div
            className="bg-white rounded-4xl p-8 rounded-custom shadow-sm border border-surface-dim text-center group hover:shadow-lg hover:scale-105 transition"
            data-purpose="contact-card"
          >
            <div className="w-13 h-13 bg-surface-low rounded-full flex items-center justify-center mx-auto mb-6 bg-primary text-white">
              <span className="material-symbols-outlined ">schedule</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Giờ làm việc</h3>
            <p className="text-xl font-medium text-primary">
              Thứ 2 - Thứ 7: 08:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
