import { useNavigate } from "react-router-dom";

const benefits = [
  { icon: "trending_up", title: "Chiết khấu theo sản lượng", desc: "Mức chiết khấu hấp dẫn, tăng dần theo sản lượng đặt hàng mỗi tháng." },
  { icon: "campaign", title: "Hỗ trợ marketing & tài liệu", desc: "Catalogue, mẫu sản phẩm, hình ảnh chất lượng cao hỗ trợ bán hàng hiệu quả." },
  { icon: "priority_high", title: "Ưu tiên cấp hàng", desc: "Ưu tiên cấp hàng trong mùa cao điểm, tránh thiếu hàng ảnh hưởng kinh doanh." },
  { icon: "engineering", title: "Hỗ trợ kỹ thuật & tư vấn", desc: "Đội ngũ kỹ thuật sẵn sàng giải đáp thắc mắc, tư vấn giải pháp phù hợp." },
];

export default function AgentProgramSection() {
  const navigate = useNavigate();
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-gutter items-center">
        <div>
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
            Hệ thống phân phối
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-black mt-2 sm:mt-4 mb-3 sm:mb-4">
            Trở Thành Đại Lý Aurix Uniforms
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mb-6 sm:mb-8">
            Với thương hiệu khẳng định qua hơn 10 năm, chứng nhận ISO 9001:2015
            và mạng lưới khách hàng rộng khắp, đại lý có lợi thế lớn trong tiếp
            cận khách hàng.
          </p>
          <button
            onClick={() => navigate("/dai-ly")}
            className="w-full sm:w-auto inline-block bg-primary text-on-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-headline-sm hover:opacity-95 transition-opacity text-center"
          >
            Tìm Hiểu Chương Trình Đại Lý
          </button>
        </div>
 
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant"
            >
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl mb-2 sm:mb-3 block">
                {b.icon}
              </span>
              <h4 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2">
                {b.title}
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}