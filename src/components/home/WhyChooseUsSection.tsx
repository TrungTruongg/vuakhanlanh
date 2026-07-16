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
    <section className="bg-surface-container py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <div>
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
            Sự Khác Biệt Của Aurix
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mt-2 mb-6 sm:mb-8">
            Tại Sao Nên Chọn Chúng Tôi?
          </h2>
 
          <div className="space-y-6 sm:space-y-8">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-xl sm:text-2xl">
                    check_circle
                  </span>
                </div>
                <p className="text-sm sm:text-base text-on-surface-variant">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
 
        <div className="relative pb-16 sm:pb-0">
          <img
            src={WhyChooseUs}
            className="aspect-square w-full object-cover rounded-lg shadow-2xl"
            alt="Thợ may cắt vải wool navy bằng kéo chuyên dụng"
          />
          <div className="absolute bottom-0 left-4 right-4 sm:left-auto sm:right-auto sm:-bottom-8 bg-white p-5 sm:p-8 shadow-xl border border-outline-variant sm:max-w-xs">
            <div className="text-2xl sm:text-display-lg text-primary">98%</div>
            <p className="text-xs sm:text-sm font-label-caps text-secondary">
              Khách hàng hài lòng
            </p>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 italic">
              "Chất lượng vải tuyệt vời, đường may rất chắc chắn và form dáng
              chuẩn."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
