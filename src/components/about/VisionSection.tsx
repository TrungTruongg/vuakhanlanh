const VisionSection = () => {
  return (
    <section className="bg-surface-container py-20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
            Định hướng
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 reveal reveal-in">
           Sứ Mệnh - Tầm Nhìn - Giá Trị
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">        
          <div className="bg-white p-10 border border-outline/10 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary text-on-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">
              Sứ Mệnh
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Cung cấp trang phục doanh nghiệp cao cấp, giúp nâng tầm hình ảnh
              và tạo niềm tin cho đội ngũ nhân sự chuyên nghiệp.
            </p>
          </div>

          <div className="bg-white p-10 border border-outline/10 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary text-on-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">
              Tầm Nhìn
            </h3>
            <p className="font-body-md text-on-surface-variant">
              Trở thành tiêu chuẩn toàn cầu cho các giải pháp đồng phục bền vững
              và chất lượng vượt trội.
            </p>
          </div>

          <div className="bg-white p-10 border border-outline/10 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary text-on-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">
              Giá Trị Cốt Lõi
            </h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span> Cải Tiến
                (Innovation)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span> Giá Trị
                (Value)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span> Cam Kết
                (Commitment)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary"></span> Trung Thực
                (Integrity)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
