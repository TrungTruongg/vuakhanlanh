const warnings = [
  {
    id: 1,
    title: "Kích Ứng Da",
    des: "Khăn kém chất lượng thường chứa hóa chất không tốt, gây da đỏ, ngứa hoặc phát ban.",
  },
  {
    id: 2,
    title: "Khô Da",
    des: "Chứa chất làm khô da, không cung cấp đủ độ ẩm, khiến da mất đàn hồi tự nhiên.",
  },
  {
    id: 3,
    title: "Mất Cân Bằng Da",
    des: "Thay đổi pH da, gây ra mụn, khô da hoặc tình trạng dầu thừa không mong muốn.",
  },
];

const ManufactureWarningSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-red-500 font-semibold text-base uppercase tracking-wider">
            Cảnh báo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Lưu Ý Nơi Sản Xuất Kém Chất Lượng
          </h2>
          <p className="text-black text-justify mt-3 max-w-3xl mx-auto">
            Mặc dù là sản phẩm tiện ích nhưng những nơi sản xuất khăn lạnh kém
            chất lượng có thể gây ra các vấn đề về da. Hãy luôn chọn nhà sản
            xuất uy tín có chứng nhận an toàn.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {warnings.map((w) => (
            <div
              key={w.id}
              className="bg-red-50 rounded-4xl p-7 border border-red-100"
            >
              <span className="material-symbols-outlined text-red-500">
                warning
              </span>
              <h3 className="font-bold text-black mb-2">{w.title}</h3>
              <p className="text-black text-base text-justify leading-relaxed">
                {w.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufactureWarningSection;
