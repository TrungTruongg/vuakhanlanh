import ISO from "@/assets/certificate/ISO.webp";
import KNSP1 from "@/assets/certificate/knsp1.webp";
import KNSP2 from "@/assets/certificate/knsp2.webp";

const certificates = [
  {
    id: 1,
    code: "Hồ sơ 01",
    title: "Chứng Nhận ISO 9001:2015",
    desc: "Hệ thống quản lý chất lượng được kiểm soát chặt chẽ trong toàn bộ quy trình may đo.",
    image: ISO,
  },
  {
    id: 2,
    code: "Hồ sơ 02",
    title: "Kiểm Định Chất Lượng Vải",
    desc: "Vải đầu vào được kiểm tra độ bền màu, độ co rút và an toàn cho da trước khi đưa vào sản xuất.",
    image: KNSP1,
  },
  {
    id: 3,
    code: "Hồ sơ 03",
    title: "Hồ Sơ Năng Lực Sản Xuất",
    desc: "Hồ sơ pháp lý, năng lực xưởng may và tiêu chuẩn kỹ thuật được công bố đầy đủ, minh bạch.",
    image: KNSP2,
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
            Chứng nhận chất lượng
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 reveal reveal-in">
            Giấy Chứng Nhận Đảm Bảo Chất Lượng Sản Xuất
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-border-subtle overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Đạt chuẩn
                  </span>
                  <span className="text-[10px] text-on-surface-variant">
                    {cert.code}
                  </span>
                </div>
                <h4 className="text-headline-sm font-headline-sm mb-2">
                  {cert.title}
                </h4>
                <p className="text-body-sm text-on-surface-variant">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
