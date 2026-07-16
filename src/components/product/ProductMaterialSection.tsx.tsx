import Mat from "@/assets/material.webp";

const ProductMaterialSection = () => {
  return (
    <section className="py-10 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-2">
          Chất Liệu &amp; Công Nghệ
        </h2>
        <div className="h-1 w-24 bg-secondary-container mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="md:col-span-2 bg-white border border-[#E9ECEF] p-6 sm:p-8">
          <h4 className="sm:text-xl font-bold text-primary mb-3 sm:mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>{" "}
            Cotton 100%
          </h4>
          <p className="text-sm sm:text-base text-on-surface-variant mb-4">
            Sợi tự nhiên cao cấp, mang lại sự thông thoáng tuyệt đối và khả
            năng thấm hút mồ hôi vượt trội cho nhân viên văn phòng.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-container text-label-caps font-label-caps rounded-full text-[10px]">
              Thoáng khí
            </span>
            <span className="px-3 py-1 bg-surface-container text-label-caps font-label-caps rounded-full text-[10px]">
              Mềm mại
            </span>
          </div>
        </div>
        <div className="bg-white border border-[#E9ECEF] p-6 sm:p-8">
          <h4 className="sm:text-xl font-bold text-primary mb-3 sm:mb-4">
            Vải Kate
          </h4>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Sự kết hợp giữa Cotton và Polyester giúp bề mặt phẳng mịn, ít nhăn
            và giữ màu bền lâu.
          </p>
        </div>
        <div className="bg-white border border-[#E9ECEF] p-6 sm:p-8">
          <h4 className="sm:text-xl font-bold text-primary mb-3 sm:mb-4">
            Vải Kaki
          </h4>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Chất vải dày dặn, độ bền cao, phù hợp cho đồng phục bảo hộ và kỹ
            thuật viên.
          </p>
        </div>
        <div className="bg-surface-container-high p-6 sm:p-8 md:col-span-4 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="md:w-1/2">
            <h3 className="sm:text-xl font-bold text-primary mb-3 sm:mb-4">
              Dịch Vụ Tùy Chỉnh Chuyên Nghiệp
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  design_services
                </span>
                <div>
                  <h5 className="text-sm sm:text-base font-bold">
                    Thêu Logo Vi Tính
                  </h5>
                  <p className="text-sm sm:text-base text-on-surface-variant">
                    Đường chỉ sắc nét, bền màu, mang lại vẻ sang trọng cho
                    thương hiệu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  print
                </span>
                <div>
                  <h5 className="text-sm sm:text-base font-bold">
                    In Lụa &amp; In Chuyển Nhiệt
                  </h5>
                  <p className="text-sm sm:text-base text-on-surface-variant">
                    Công nghệ in hiện đại, không bong tróc, màu sắc trung thực
                    tuyệt đối.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-48 sm:h-64 relative">
            <img
              className="w-full h-full object-cover rounded shadow-md"
              alt="Máy thêu công nghiệp thêu logo doanh nghiệp lên vải navy"
              src={Mat}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMaterialSection;