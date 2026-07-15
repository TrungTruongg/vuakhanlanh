import Mat from "@/assets/material.webp";

const ProductComponentsSection = () => {
  return (
    <section className="py-24 px-margin-desktop bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="font-display-lg text-display-lg text-primary mb-2">
          Chất Liệu &amp; Công Nghệ
        </h2>
        <div className="h-1 w-24 bg-secondary-container mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white border border-[#E9ECEF] p-8">
          <h4 className="font-headline-md text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>{" "}
            Cotton 100%
          </h4>
          <p className="text-body-md text-on-surface-variant mb-4">
            Sợi tự nhiên cao cấp, mang lại sự thông thoáng tuyệt đối và khả năng
            thấm hút mồ hôi vượt trội cho nhân viên văn phòng.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-surface-container text-label-caps font-label-caps rounded-full text-[10px]">
              Thoáng khí
            </span>
            <span className="px-3 py-1 bg-surface-container text-label-caps font-label-caps rounded-full text-[10px]">
              Mềm mại
            </span>
          </div>
        </div>
        <div className="bg-white border border-[#E9ECEF] p-8">
          <h4 className="font-headline-md text-primary mb-4">Vải Kate</h4>
          <p className="text-body-md text-on-surface-variant">
            Sự kết hợp giữa Cotton và Polyester giúp bề mặt phẳng mịn, ít nhăn
            và giữ màu bền lâu.
          </p>
        </div>
        <div className="bg-white border border-[#E9ECEF] p-8">
          <h4 className="font-headline-md text-primary mb-4">Vải Kaki</h4>
          <p className="text-body-md text-on-surface-variant">
            Chất vải dày dặn, độ bền cao, phù hợp cho đồng phục bảo hộ và kỹ
            thuật viên.
          </p>
        </div>
        <div className="bg-surface-container-high p-8 md:col-span-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="font-headline-md text-primary mb-4">
              Dịch Vụ Tùy Chỉnh Chuyên Nghiệp
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">
                  grocery
                </span>
                <div>
                  <h5 className="font-bold">Thêu Logo Vi Tính</h5>
                  <p className="text-body-md text-on-surface-variant">
                    Đường chỉ sắc nét, bền màu, mang lại vẻ sang trọng cho
                    thương hiệu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">
                  print
                </span>
                <div>
                  <h5 className="font-bold">In Lụa &amp; In Chuyển Nhiệt</h5>
                  <p className="text-body-md text-on-surface-variant">
                    Công nghệ in hiện đại, không bong tróc, màu sắc trung thực
                    tuyệt đối.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-64 relative">
            <img
              className="w-full h-full bg-cover bg-center rounded shadow-md"
              data-alt="A detailed close-up of a high-precision industrial embroidery machine stitching a complex gold and white corporate logo onto dark navy textile. The focus is on the needle and the intricate thread patterns. The lighting is bright and industrial, emphasizing technical precision and quality manufacturing."
              src={Mat}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComponentsSection;
