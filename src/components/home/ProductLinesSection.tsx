import Bi from "@/assets/bi.webp";
import Alex from "@/assets/alex.webp";

const lines = [
  {
    id: 1,
    name: "Khăn Lạnh Vải Bi",
    image: Bi,
    desc: "Khăn lạnh vải bi được đóng gói hoàn toàn tự động thông qua hệ thống sản xuất tiên tiến, kết hợp vải bi chất lượng cao với nước tinh khiết lọc Nano. Hương liệu tự nhiên tạo mùi thơm dễ chịu, hoạt chất GLYCERIN dưỡng ẩm da hiệu quả.",
  },
  {
    id: 2,
    name: "Khăn Lạnh Giấy Mỹ",
    image: Alex,
    desc: "Khăn giấy Mỹ sản xuất từ chất liệu giấy phân hủy nhanh, tối ưu tác động tích cực với môi trường. Thành phần gồm giấy Alex Mỹ, nước tinh khiết lọc Nano, hương liệu tự nhiên và GLYCERIN dưỡng ẩm.",
  },
];

export default function ProductLinesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl font-headline-xl">Dòng Sản Phẩm Tiện Ích</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-gutter">
          {lines.map((line) => (
            <div key={line.id} className="rounded-xl border border-border-subtle overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={line.image} alt={line.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-headline-lg font-headline-lg mb-4">{line.name}</h3>
                <p className="text-body-sm text-on-surface-variant mb-6">{line.desc}</p>
                <a href="/kich-thuoc-khan-lanh" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Xem chi tiết
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}