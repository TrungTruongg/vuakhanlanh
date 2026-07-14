const items = [
  { icon: "verified_user", title: "Chất Lượng Tuân Thủ Mọi Tiêu Chuẩn", desc: "Quy trình sản xuất nghiêm ngặt, kiểm soát và giám sát liên tục để đảm bảo mọi sản phẩm đều đạt chất lượng tốt nhất." },
  { icon: "water_drops", title: "Nguyên Liệu An Toàn", desc: "Nguyên liệu an toàn cho da, không gây kích ứng và đáp ứng các tiêu chuẩn an toàn cao nhất." },
  { icon: "star_shine", title: "Đa Dạng Và Linh Hoạt", desc: "Đa dạng về kích thước, chủng loại, linh hoạt đáp ứng nhiều mục đích sử dụng khác nhau." },
  { icon: "local_shipping", title: "Dịch Vụ Hỗ Trợ Chuyên Nghiệp", desc: "Đội ngũ hỗ trợ nhanh chóng, nhiệt tình, sẵn sàng giải quyết mọi vấn đề của khách hàng." },
  { icon: "nest_eco_leaf", title: "Cải Tiến Không Ngừng", desc: "Không ngừng nghiên cứu, phát triển để cải thiện sản phẩm và dịch vụ theo nhu cầu khách hàng." },
  { icon: "workspace_premium", title: "Thiết Kế In Logo", desc: "Dịch vụ thiết kế, in tên - logo thương hiệu doanh nghiệp khi bạn trở thành đối tác." },
];

export default function QualityAssuranceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-primary tracking-widest">Đảm bảo</span>
          <h2 className="text-headline-xl font-headline-xl mt-4 mb-4">Đảm Bảo Chất Lượng</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Sản phẩm chất lượng cao, an toàn và đáng tin cậy — lợi ích và sức khỏe khách hàng là ưu tiên.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter">
          {items.map((item) => (
            <div key={item.title} className="p-8 border border-border-subtle rounded-xl hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                {item.icon}
              </span>
              <h4 className="text-headline-sm font-bold font-headline-sm mb-3">{item.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}