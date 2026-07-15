const warnings = [
  {
    id: 1,
    title: "Vải Co Rút, Phai Màu",
    des: "Vải kém chất lượng, không qua xử lý pre-shrink thường bị co rút, bạc màu nhanh chỉ sau vài lần giặt.",
  },
  {
    id: 2,
    title: "Đường May Lỗi, Bung Chỉ",
    des: "Xưởng may thiếu kiểm soát chất lượng dễ để lọt sản phẩm bung chỉ, lệch form, ảnh hưởng độ bền khi sử dụng.",
  },
  {
    id: 3,
    title: "Kích Ứng Da",
    des: "Vải không rõ nguồn gốc, dư lượng hóa chất nhuộm vượt ngưỡng có thể gây ngứa, mẩn đỏ khi tiếp xúc da lâu.",
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
            Lưu Ý Đồng Phục Kém Chất Lượng
          </h2>
          <p className="text-black text-justify mt-3 max-w-3xl mx-auto">
            Mặc dù là sản phẩm sử dụng lâu dài nhưng những xưởng may đồng phục
            kém chất lượng có thể gây ra nhiều vấn đề về độ bền và an toàn khi
            mặc. Hãy luôn chọn xưởng may uy tín có quy trình kiểm soát rõ ràng.
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