const BranchIntroSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 reveal reveal-in">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-secondary font-semibold text-base uppercase tracking-wider">
            Về chúng tôi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 reveal reveal-in">
            CÔNG TY TNHH TM &amp; SX AN THUẬN PHÚ
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-secondary/80 leading-relaxed text-justify">
            <p>
              <strong className="text-primary">Aurix Uniforms</strong> — thương
              hiệu thuộc Công ty TNHH Thương Mại và Sản Xuất An Thuận Phú — là
              đơn vị hàng đầu trong lĩnh vực sản xuất và cung cấp đồng phục
              chuyên nghiệp tại Việt Nam với hơn 10 năm kinh nghiệm.
            </p>
            <p>
              Chúng tôi chuyên cung cấp giải pháp đồng phục doanh nghiệp, đồng
              phục bảo hộ, thiết kế và in ấn logo chuyên nghiệp cho các doanh
              nghiệp trong lĩnh vực nhà hàng, khách sạn, y tế và nhiều ngành
              dịch vụ khác.
            </p>
            <p>
              Quy trình sản xuất được thực hiện khép kín tại nhà máy với trang
              thiết bị hiện đại, đáp ứng tiêu chuẩn quốc tế ISO 9001:2015. Sản
              phẩm được sản xuất từ nguyên liệu cao cấp, đảm bảo độ bền và sự
              thoải mái tối đa cho người mặc.
            </p>
          </div>

          <div className="bg-white rounded-4xl border border-outline-variant text-primary p-8">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/20">
              Thông Tin Liên Hệ Chi Tiết
            </h3>
            <div className="space-y-4 text-base">
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
                <span className="font-semibold text-black sm:w-36 sm:shrink-0 whitespace-nowrap">
                  Tên công ty:
                </span>
                <span className="text-black">
                  Công ty TNHH TM & SX An Thuận Phú
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
                <span className="font-semibold text-black sm:w-36 sm:shrink-0 whitespace-nowrap">
                  Thương hiệu:
                </span>
                <span className="text-black">Aurix Uniforms</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
                <span className="font-semibold text-black sm:w-36 sm:shrink-0 whitespace-nowrap">
                  Hotline:
                </span>
                <a href="tel:0969378787" className="text-secondary font-medium">
                  0969.378.787
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
                <span className="font-semibold text-black sm:w-36 sm:shrink-0 whitespace-nowrap">
                  Email:
                </span>
                <a
                  href="mailto:contact@aurixuniforms.vn"
                  className="text-secondary"
                >
                  aurixuniform@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
                <span className="font-semibold text-black sm:w-36 sm:shrink-0 whitespace-nowrap">
                  Website:
                </span>
                <span className="text-secondary">aurix-uniforms.vn</span>
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3">
                <span className="font-semibold text-black sm:w-36 sm:shrink-0 whitespace-nowrap">
                  Giờ làm việc:
                </span>
                <span className="text-black">Thứ 2 - Thứ 7: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchIntroSection;