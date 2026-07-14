import ISO from "@/assets/certificate/ISO.webp";
import KNSP1 from "@/assets/certificate/knsp1.webp";
import KNSP2 from "@/assets/certificate/knsp2.webp";

const certificates = [
  { id: 1, code: "Hồ sơ 01", title: "Chứng Nhận ISO", desc: "Quy trình sản xuất được kiểm soát chặt chẽ theo tiêu chuẩn chất lượng và an toàn.", image: ISO },
  { id: 2, code: "Hồ sơ 02", title: "Kiểm Nghiệm Sản Phẩm", desc: "Sản phẩm được đánh giá định kỳ để đảm bảo vệ sinh an toàn trước khi đưa ra thị trường.", image: KNSP1 },
  { id: 3, code: "Hồ sơ 03", title: "Hồ Sơ Công Bố", desc: "Hồ sơ và giấy tờ chứng nhận được cập nhật đầy đủ, minh bạch cho từng dòng sản phẩm.", image: KNSP2 },
];

export default function CertificatesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-primary tracking-widest">
            Chứng nhận an toàn
          </span>
          <h2 className="text-headline-xl font-headline-xl mt-4 mb-4">
            Giấy Chứng Nhận Đảm Bảo Vệ Sinh An Toàn
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Toàn bộ quy trình sản xuất khăn lạnh được kiểm tra và công bố rõ ràng,
            giúp khách hàng yên tâm về chất lượng, độ an toàn và tính minh bạch của sản phẩm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-gutter">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-xl border border-border-subtle overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-4/3 overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Chuẩn sạch
                  </span>
                  <span className="text-[10px] text-on-surface-variant">{cert.code}</span>
                </div>
                <h4 className="text-headline-sm font-headline-sm mb-2">{cert.title}</h4>
                <p className="text-body-sm text-on-surface-variant">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}