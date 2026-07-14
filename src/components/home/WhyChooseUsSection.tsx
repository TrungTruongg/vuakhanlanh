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
    <section className="py-24 bg-surface-mint">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-primary tracking-widest">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-headline-xl font-headline-xl mt-4">
            Đối Tác Tin Cậy Của Bạn
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mx-auto">
          {reasons.map((reason) => (
            <div key={reason} className="w-full flex items-center gap-3 bg-white p-4 rounded-2xl border border-border-subtle">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <p className="text-body-md text-on-surface">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}