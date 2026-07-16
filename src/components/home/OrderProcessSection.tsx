const steps = [
  { num: "1", title: "Liên hệ & Tư vấn", desc: "Gọi hotline hoặc điền form báo giá. Đội ngũ tư vấn phản hồi trong 30 phút, hỗ trợ lựa chọn sản phẩm phù hợp nhất." },
  { num: "2", title: "Chốt đơn & Sản xuất", desc: "Sau khi thống nhất mẫu mã, số lượng và yêu cầu in ấn, đơn hàng được xác nhận và đưa vào sản xuất trong 24–48 giờ." },
  { num: "3", title: "Đóng gói & Vận chuyển", desc: "Sản phẩm đóng gói cẩn thận, giao hàng toàn quốc qua đơn vị vận chuyển uy tín, có thể theo dõi đơn hàng." },
  { num: "4", title: "Nhận hàng & Phản hồi", desc: "Quý khách nhận hàng, kiểm tra chất lượng. Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ xử lý ngay lập tức." },
];

export default function OrderProcessSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
            Phân phối
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-black mt-2 sm:mt-4 mb-3 sm:mb-4">
            Đặt May Đồng Phục Sỉ — Giao Toàn Quốc
          </h2>
        </div>
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-gutter">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base sm:text-lg mb-3 sm:mb-4">
                {step.num}
              </div>
              <h4 className="text-sm sm:text-base font-headline-sm mb-1.5 sm:mb-2">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}