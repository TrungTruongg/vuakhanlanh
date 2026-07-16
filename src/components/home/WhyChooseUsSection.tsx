import WhyChooseUs from "@/assets/whychooseus.webp";
const reasons = [
  "Hơn 10 năm kinh nghiệm sản xuất",
  "Đạt chứng nhận ISO 9001:2015",
  "Nguyên liệu an toàn, thân thiện môi trường",
  "Dây chuyền sản xuất hiện đại, tự động hóa",
  "Giá cả cạnh tranh, chính sách hỗ trợ tốt",
  "Giao hàng nhanh chóng trên toàn quốc",
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-surface-container py-24 px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
         <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
            Sự Khác Biệt Của Aurix
          </span>
          <h2 className="font-display-lg text-display-lg text-primary mt-2 mb-8">
            Tại Sao Nên Chọn Chúng Tôi?
          </h2>

          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">
                    check_circle
                  </span>
                </div>
                <p className="text-on-surface-variant">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={WhyChooseUs}
            className="aspect-square bg-cover bg-center rounded-lg shadow-2xl"
            data-alt="A close-up high-definition shot of a professional tailor's hands precisely cutting high-end navy blue wool fabric with large silver shears. The workspace is a minimalist, well-lit studio with rolls of premium textiles in the background. The lighting is focused and warm, emphasizing craftsmanship, precision, and the 'Tailored Excellence' brand identity."
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl border border-outline-variant max-w-xs">
            <div className="text-display-lg text-primary">98%</div>
            <p className="font-label-caps text-secondary">
              Khách hàng hài lòng
            </p>
            <p className="text-body-md text-on-surface-variant mt-2 italic">
              "Chất lượng vải tuyệt vời, đường may rất chắc chắn và form dáng
              chuẩn."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
