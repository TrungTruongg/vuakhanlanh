const ManufactureProcessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 reveal reveal-in">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-primary font-semibold text-base uppercase tracking-wider">
            Quy trình
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 reveal reveal-in">
            Quy Trình Sản Xuất 4 Bước
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          <div className="relative bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:scale-105 transition-all border border-[#bbf7d0] group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">
              01
            </div>
            <div className="w-14 h-14 bg-[#f0fdf4] rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary mb-5 transition">
              <span className="material-symbols-outlined group-hover:text-white text-primary">
                water_drops
              </span>
            </div>
            <h3 className="font-bold text-black mb-2 reveal reveal-in">
              Chọn Nguyên Liệu
            </h3>
            <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
              Chọn lọc nguyên liệu loại 1, an toàn cho da, không gây kích ứng.
            </p>
          </div>
          <div className="relative bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:scale-105 transition-all border border-[#bbf7d0] group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">
              02
            </div>
            <div className="w-14 h-14 bg-[#f0fdf4] rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition">
              <span className="material-symbols-outlined group-hover:text-white text-primary">
                settings
              </span>
            </div>
            <h3 className="font-bold text-black mb-2 reveal reveal-in">
              Dây Chuyền Sản Xuất
            </h3>
            <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
              Áp dụng công nghệ Nano hiện đại, tự động hóa toàn bộ quy trình.
            </p>
          </div>
          <div className="relative bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:scale-105 transition-all border border-[#bbf7d0] group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">
              03
            </div>
            <div className="w-14 h-14 bg-[#f0fdf4] rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition">
             <span className="material-symbols-outlined group-hover:text-white text-primary">
                verified_user
              </span>
            </div>
            <h3 className="font-bold text-black mb-2 reveal reveal-in">
              Kiểm Tra Chất Lượng
            </h3>
            <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
              Kiểm soát chất lượng nghiêm ngặt qua nhiều công đoạn trước khi
              đóng gói.
            </p>
          </div>
          <div className="relative bg-white rounded-4xl p-7 shadow-sm hover:shadow-xl hover:scale-105 transition-all border border-[#bbf7d0] group">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-base">
              04
            </div>
            <div className="w-14 h-14 bg-[#f0fdf4] rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition">
              <span className="material-symbols-outlined group-hover:text-white text-primary">
                factory
              </span>
            </div>
            <h3 className="font-bold text-black mb-2 reveal reveal-in">
              Đóng Gói &amp; Vận Chuyển
            </h3>
            <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
              Đóng gói theo tiêu chuẩn vệ sinh, giao hàng nhanh chóng toàn quốc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufactureProcessSection;
