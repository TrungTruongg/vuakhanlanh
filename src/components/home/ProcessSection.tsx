const ProcessSection = () => {
  return (
    <section className="py-24 bg-surface-mint relative">
      <div className="max-w-300 mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="font-label-caps text-label-caps text-primary tracking-widest">
            THE AURIX STANDARD
          </span>
          <h2 className="text-headline-xl font-headline-xl mt-4">
            Quy Trình Sản Xuất Chuẩn Vệ Sinh
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-gutter">
          <div className="relative">
            <div className="text-display-lg font-display-lg text-primary/10 absolute -top-12 -left-4">
              01
            </div>
            <div className="glass-card p-8 rounded-xl relative">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                biotech
              </span>
              <h4 className="text-headline-sm font-headline-sm mb-3">
                Kiểm định nguyên liệu
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Toàn bộ vải, giấy và hóa chất được kiểm tra kỹ lưỡng trước khi
                đưa vào dây chuyền sản xuất.
              </p>
            </div>
          </div>
          {/*  Step 2  */}
          <div className="relative md:mt-12">
            <div className="text-display-lg font-display-lg text-primary/10 absolute -top-12 -left-4">
              02
            </div>
            <div className="glass-card p-8 rounded-xl relative">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                precision_manufacturing
              </span>
              <h4 className="text-headline-sm font-headline-sm mb-3">
                Cắt &amp; định hình
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Máy móc hiện đại cắt theo kích thước chuẩn, đảm bảo độ đồng đều
                và hạn chế phế phẩm.
              </p>
            </div>
          </div>
          {/*  Step 3  */}
          <div className="relative">
            <div className="text-display-lg font-display-lg text-primary/10 absolute -top-12 -left-4">
              03
            </div>
            <div className="glass-card p-8 rounded-xl relative">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                opacity
              </span>
              <h4 className="text-headline-sm font-headline-sm mb-3">
                Thấm dung dịch
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Nước tinh khiết qua lọc RO và dung dịch kháng khuẩn được thấm
                đều theo công thức kiểm soát.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="relative md:mt-12">
            <div className="text-display-lg font-display-lg text-primary/10 absolute -top-12 -left-4">
              04
            </div>
            <div className="glass-card p-8 rounded-xl relative">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                inventory_2
              </span>
              <h4 className="text-headline-sm font-headline-sm mb-3">
                Đóng gói &amp; xuất kho
              </h4>
              <p className="text-body-sm text-on-surface-variant">
                Sản phẩm được đóng gói kín hơi, kiểm tra QC lần cuối rồi mới
                xuất kho đến tay khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
