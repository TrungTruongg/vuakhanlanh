import { useState } from "react";

const faqs = [
  {
    q: "Đặt may đồng phục số lượng ít có nhận không?",
    a: "Có. Xưởng nhận may từ số lượng nhỏ (10-20 bộ) cho quán ăn, cửa hàng nhỏ đến số lượng lớn (hàng nghìn bộ) cho chuỗi nhà hàng, khách sạn hoặc doanh nghiệp. Số lượng càng lớn, chi phí trên mỗi bộ càng tối ưu.",
  },
  {
    q: "Đồng phục được may từ chất liệu vải gì?",
    a: "Tùy theo mục đích sử dụng, chúng tôi tư vấn chất liệu phù hợp: Kate, Kaki cho đồng phục văn phòng thoáng mát, Cotton 4 chiều co giãn cho đồng phục bếp - phục vụ, hoặc vải Thun cá sấu cho đồng phục thể thao, sự kiện. Toàn bộ vải đều được kiểm định về độ bền màu và độ thấm hút trước khi đưa vào sản xuất.",
  },
  {
    q: "Có hỗ trợ thiết kế và in - thêu logo thương hiệu không?",
    a: "Có. Đội ngũ thiết kế hỗ trợ tư vấn mẫu, phối màu theo bộ nhận diện thương hiệu và thực hiện in hoặc thêu logo trực tiếp lên đồng phục, đảm bảo sắc nét, bền màu qua nhiều lần giặt.",
  },
  {
    q: "Không biết size thì có được đo tận nơi không?",
    a: "Có. Với đơn hàng từ số lượng nhất định, đội ngũ có thể đến đo size trực tiếp tại cơ sở của quý khách. Nếu không tiện đo tận nơi, chúng tôi cung cấp bảng size mẫu (S–XXL) và sản xuất theo số đo quý khách gửi.",
  },
  {
    q: "Thời gian may một đơn hàng mất bao lâu?",
    a: "Đơn hàng may theo mẫu có sẵn: 5-7 ngày làm việc. Đơn hàng thiết kế mới hoàn toàn kèm in - thêu logo: 10-15 ngày tùy số lượng và độ phức tạp của thiết kế.",
  },
  {
    q: "Vải đồng phục có bị phai màu hay co rút sau khi giặt không?",
    a: "Vải được xử lý qua công đoạn giặt định hình (pre-shrink) và kiểm tra độ bền màu trước khi may, hạn chế tối đa tình trạng co rút hoặc phai màu khi giặt theo hướng dẫn sử dụng thông thường.",
  },
  {
    q: "Đặt hàng số lượng lớn có được ưu đãi gì?",
    a: "Quý khách đặt số lượng lớn hoặc ký hợp đồng dài hạn sẽ được hưởng chiết khấu theo bậc thang, hỗ trợ vận chuyển toàn quốc và chính sách bảo hành đường may trong thời gian quy định.",
  },
  {
    q: "Có được đổi trả nếu đồng phục may sai size không?",
    a: "Có. Nếu sản phẩm sai size hoặc lỗi kỹ thuật từ phía xưởng, quý khách được đổi hoặc chỉnh sửa miễn phí trong vòng 7 ngày kể từ ngày nhận hàng.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
 
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-3 sm:mb-4 text-on-surface">
            Câu Hỏi Thường Gặp
          </h2>
        </div>
 
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="bg-white rounded-xl border border-border-subtle overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center gap-3 p-4 sm:p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm sm:text-base font-headline-sm pr-2 sm:pr-4">
                  {faq.q}
                </span>
                <span className="material-symbols-outlined text-primary shrink-0">
                  {openIndex === i ? "remove" : "add"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm text-on-surface-variant">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
