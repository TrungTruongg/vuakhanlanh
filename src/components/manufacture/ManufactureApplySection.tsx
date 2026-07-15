const applications = [
  {
    id: 1,
    title: "Nhà Hàng & Khách Sạn",
    des: "Đồng phục phục vụ, bếp, lễ tân giúp nâng tầm hình ảnh chuyên nghiệp và đồng bộ thương hiệu.",
  },
  {
    id: 2,
    title: "Văn Phòng & Doanh Nghiệp",
    des: "Đồng phục công sở tạo sự chỉn chu, gắn kết đội ngũ và thể hiện văn hóa công ty.",
  },
  {
    id: 3,
    title: "Nhà Máy & Công Trình",
    des: "Đồng phục bảo hộ bền bỉ, chống mài mòn, đảm bảo an toàn cho công nhân trong môi trường làm việc khắc nghiệt.",
  },
  {
    id: 4,
    title: "Sự Kiện & Hội Nghị",
    des: "Đồng phục in - thêu logo riêng cho từng sự kiện, tạo dấu ấn chuyên nghiệp với khách mời.",
  },
];

const ManufactureApplySection = () => {
  return (
    <section className="py-24 bg-surface-mint">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-primary font-semibold text-base uppercase tracking-wider">
            Ứng dụng
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 reveal reveal-in">
            Đồng Phục Cho Mọi Ngành Nghề
          </h2>
          <p className="text-black text-justify mt-3 max-w-3xl mx-auto reveal reveal-in">
            May đo từ chất liệu vải cao cấp, mỗi bộ đồng phục được thiết kế
            riêng theo đặc thù công việc, đảm bảo thoải mái vận động và giữ
            phong thái chuyên nghiệp trong suốt thời gian sử dụng.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
              <span className="material-symbols-outlined text-primary">
                sentiment_satisfied
              </span>
              <h3 className="font-bold text-black mb-2 reveal reveal-in">
                {app.title}
              </h3>
              <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                {app.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufactureApplySection;
