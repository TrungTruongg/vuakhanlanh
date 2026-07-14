const benefits = [
  { icon: "trending_up", title: "Chiết khấu theo sản lượng", desc: "Mức chiết khấu hấp dẫn, tăng dần theo sản lượng đặt hàng mỗi tháng." },
  { icon: "campaign", title: "Hỗ trợ marketing & tài liệu", desc: "Catalogue, mẫu sản phẩm, hình ảnh chất lượng cao hỗ trợ bán hàng hiệu quả." },
  { icon: "priority_high", title: "Ưu tiên cấp hàng", desc: "Ưu tiên cấp hàng trong mùa cao điểm, tránh thiếu hàng ảnh hưởng kinh doanh." },
  { icon: "engineering", title: "Hỗ trợ kỹ thuật & tư vấn", desc: "Đội ngũ kỹ thuật sẵn sàng giải đáp thắc mắc, tư vấn giải pháp phù hợp." },
];

export default function AgentProgramSection() {
  return (
    <section className="py-24 bg-surface-mint">
      <div className="max-w-300 mx-auto px-8 grid md:grid-cols-2 gap-gutter items-center">
        <div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest">
            Hệ thống phân phối
          </span>
          <h2 className="text-headline-xl font-headline-xl mt-4 mb-6">
            Trở Thành Đại Lý Vua Khăn Lạnh
          </h2>
          <p className="text-body-md text-on-surface-variant mb-8">
            Với thương hiệu khẳng định qua hơn 10 năm, chứng nhận ISO 9001:2015 và
            mạng lưới khách hàng rộng khắp, đại lý có lợi thế lớn trong tiếp cận khách hàng.
          </p>
          <a
            href="/dai-ly-khan-lanh"
            className="inline-block bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-sm hover:opacity-95 transition-opacity"
          >
            Tìm Hiểu Chương Trình Đại Lý
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white p-6 rounded-xl border border-border-subtle">
              <span className="material-symbols-outlined text-primary text-3xl mb-3">
                {b.icon}
              </span>
              <h4 className="text-body-md font-bold mb-2">{b.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}