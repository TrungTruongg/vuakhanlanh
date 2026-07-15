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
    <section className="py-24 px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-display-lg text-display-lg text-primary">Đối Tác & Khách Hàng</span>
          <h2 className="text-gray-900 mt-3">
            Khách Hàng Nói Gì?
          </h2>
          <div className="w-14 h-1 bg-secondary-container rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 border border-outline-variant rounded"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, _i) => (
                  <span className="material-symbols-outlined text-amber-400 icon-filled">
                    star
                  </span>
                ))}
              </div>

              <p className="text-on-surface text-gray-700 italic leading-relaxed mb-6">
                “{t.quote}”
              </p>

              <div className="mt-auto border-t border-emerald-200 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
