const applications = [
  {
    id: 1,
    title: "Vệ Sinh Ăn Uống",
    des: "Tiệc cưới, sinh nhật, nhà hàng, quán ăn đều sử dụng khăn lạnh cho khách vệ sinh thuận tiện nhất.",
  },
  {
    id: 2,
    title: "Thể Thao & Tập Luyện",
    des: "Vận động viên sử dụng khăn lạnh để giảm nhiệt độ cơ thể, hồi phục nhanh sau hoạt động.",
  },
  {
    id: 3,
    title: "Sự Kiện Ngoài Trời",
    des: "Khăn lạnh giữ cho người tham dự luôn mát mẻ và thoải mái, đặc biệt vào mùa hè.",
  },
  {
    id: 4,
    title: "Du Lịch & Dã Ngoại",
    des: "Giúp du khách giảm nhiệt độ cơ thể khi leo núi, tham quan, hoạt động ngoài trời.",
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
            Sản Phẩm Dùng Trong Mọi Hoạt Động
          </h2>
          <p className="text-black text-justify mt-3 max-w-3xl mx-auto reveal reveal-in">
            Sản xuất khăn lạnh với hơn 99,5% nước tinh khiết, khi mở bao bì và
            tiếp xúc không khí, chúng nhanh chóng tạo cảm giác mát lạnh giúp
            giảm nhiệt độ cơ thể.
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
