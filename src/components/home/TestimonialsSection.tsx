const testimonials = [
  {
    quote:
      "Tôi rất hài lòng về sản phẩm, mùi thơm nhẹ, dễ chịu. Nhà hàng của tôi đã sử dụng khăn lạnh ở đây 5 năm qua.",
    name: "Chị Nguyên",
  },
  {
    quote:
      "Chúc Vua Khăn Lạnh làm ăn phát đạt và bền vững. Để khách hàng có thể dùng được những sản phẩm chất lượng.",
    name: "Anh Phú",
  },
  {
    quote:
      "Da tôi rất nhạy cảm với mỹ phẩm. Nhưng khi lau khăn lạnh tại đây da không bị dị ứng mà có phần làm mềm da.",
    name: "Chị Phú",
  },
  {
    quote:
      "Tôi thích nhất là được lau mồ hôi khi đi dã ngoại. Khăn lạnh mang đi thật tiện dụng, được đóng gói cẩn thận.",
    name: "Chị Yến",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-14">
          <span className="text-primary text-xs font-bold tracking-widest">
            PHẢN HỒI
          </span>
          <h2 className="text-4xl font-serif font-black text-gray-900 mt-3">
            Khách Hàng Nói Gì?
          </h2>
          <div className="w-14 h-1 bg-primary rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, _i) => (
                  <span className="material-symbols-outlined text-amber-400 icon-filled">
                    star
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-700 italic leading-relaxed mb-6">
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
