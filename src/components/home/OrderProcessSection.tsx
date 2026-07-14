const steps = [
  { num: "1", title: "Liên hệ & Tư vấn", desc: "Gọi hotline hoặc điền form báo giá. Đội ngũ tư vấn phản hồi trong 30 phút, hỗ trợ lựa chọn sản phẩm phù hợp nhất." },
  { num: "2", title: "Chốt đơn & Sản xuất", desc: "Sau khi thống nhất mẫu mã, số lượng và yêu cầu in ấn, đơn hàng được xác nhận và đưa vào sản xuất trong 24–48 giờ." },
  { num: "3", title: "Đóng gói & Vận chuyển", desc: "Sản phẩm đóng gói cẩn thận, giao hàng toàn quốc qua đơn vị vận chuyển uy tín, có thể theo dõi đơn hàng." },
  { num: "4", title: "Nhận hàng & Phản hồi", desc: "Quý khách nhận hàng, kiểm tra chất lượng. Đội ngũ chăm sóc khách hàng sẵn sàng hỗ trợ xử lý ngay lập tức." },
];

export default function OrderProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-primary tracking-widest">Phân phối</span>
          <h2 className="text-headline-xl font-headline-xl mt-4">
            Đặt Hàng Khăn Lạnh Sỉ — Giao Toàn Quốc
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-gutter">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                {step.num}
              </div>
              <h4 className="text-headline-sm font-headline-sm mb-2">{step.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}