import { useState } from "react";

const faqs = [
  { q: "Khăn lạnh Vua Khăn Lạnh có an toàn cho da nhạy cảm không?", a: "Có. Tất cả sản phẩm đều được sản xuất từ nguyên liệu chất lượng, không gây kích ứng da và tuân thủ các tiêu chuẩn an toàn. Sản phẩm được bổ sung hoạt chất GLYCERIN giúp dưỡng ẩm và chăm sóc da tối ưu." },
  { q: "Khăn lạnh được sản xuất từ nguyên liệu gì?", a: "Khăn lạnh được tạo ra với hơn 99,5% nước tinh khiết qua hệ thống RO, kết hợp hương liệu tự nhiên, chất bảo quản an toàn và hoạt chất GLYCERIN dưỡng ẩm. Chất liệu vải bi hoặc giấy Mỹ chất lượng cao." },
  { q: "Vua Khăn Lạnh có hỗ trợ in logo thương hiệu không?", a: "Có. Chúng tôi cung cấp dịch vụ thiết kế và in logo thương hiệu trực tiếp trên bao bì khăn lạnh, giúp doanh nghiệp nâng tầm nhận diện thương hiệu." },
  { q: "Đặt hàng số lượng lớn có được ưu đãi gì?", a: "Quý khách đặt số lượng lớn sẽ được hưởng chiết khấu hấp dẫn, hỗ trợ vận chuyển trên toàn quốc và chính sách đổi trả linh hoạt cho các sản phẩm lỗi." },
  { q: "Thời gian giao hàng mất bao lâu?", a: "Đơn hàng lưu kho sẽ được giao trong 1-3 ngày. Đơn hàng sản xuất theo yêu cầu (in logo, kích thước đặc biệt) sẽ cần 5-7 ngày tùy thuộc vào số lượng." },
];

export default function FAQSection({bg = "bg-surface-mint"}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-24 ${bg}`}>
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl font-headline-xl">Câu Hỏi Thường Gặp</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="bg-white rounded-xl border border-border-subtle overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-headline-sm text-headline-sm pr-4">{faq.q}</span>
                <span className="material-symbols-outlined text-primary shrink-0">
                  {openIndex === i ? "remove" : "add"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-body-sm text-on-surface-variant">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}