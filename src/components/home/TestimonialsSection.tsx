const testimonials = [
  {
    quote:
      "Chất liệu vải bảo hộ của Aurix rất bền, thoáng mát, phù hợp với điều kiện làm việc khắc nghiệt của công nhân.",
    name: "Chị Nguyên",
  },
  {
    quote:
      "Hỗ trợ thiết kế rất nhiệt tình. Chúng tôi đã có bộ đồng phục ưng ý chỉ sau 2 lần chỉnh sửa bản thảo.",
    name: "Anh Phú",
  },
  {
    quote:
      "Aurix đã giúp chúng tôi thay đổi hoàn toàn diện mạo đội ngũ lễ tân. Phản hồi từ khách hàng rất tốt về sự chuyên nghiệp.",
    name: "Chị Phú",
  },
  {
    quote:
      "Aurix đã giúp chúng tôi thay đổi hoàn toàn diện mạo đội ngũ lễ tân. Phản hồi từ khách hàng rất tốt về sự chuyên nghiệp.",
    name: "Chị Yến",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
            Đối Tác & Khách Hàng
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Khách Hàng Nói Gì?
          </h2>
          <div className="w-14 h-1 bg-secondary-container rounded-full mx-auto mt-4 sm:mt-5" />
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 sm:p-8 border border-outline-variant rounded"
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-amber-400 icon-filled text-base sm:text-lg"
                  >
                    star
                  </span>
                ))}
              </div>
 
              <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-4 sm:mb-6">
                "{t.quote}"
              </p>
 
              <div className="mt-auto border-t border-emerald-200 pt-3 sm:pt-4">
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
