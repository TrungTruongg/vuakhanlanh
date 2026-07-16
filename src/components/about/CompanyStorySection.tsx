import About from "@/assets/about_sub_3.webp";

const CompanyStorySection = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
            Giới thiệu
          </span>
          <h2 className="font-display-lg text-display-lg text-primary">
            Câu chuyện Aurix Uniforms
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Aurix Uniforms (thuộc Công ty TNHH TM & SX An Thuận Phú) tự hào là
            một trong những xưởng may đồng phục hàng đầu tại Việt Nam. Đặt chất
            lượng sản phẩm lên hàng đầu và không ngừng phấn đấu vượt qua giới
            hạn để đem đến trải nghiệm hoàn hảo cho khách hàng.
          </p>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Đồng phục không chỉ đơn thuần là trang phục thông thường, mà còn là
            một phần không thể thiếu trong hình ảnh và văn hóa của mỗi doanh
            nghiệp. Chúng tôi không ngừng nghiên cứu chất liệu vải mới và áp
            dụng quy trình may đo tiên tiến để nâng cao chất lượng, đồng thời đa
            dạng hóa danh mục sản phẩm nhằm đáp ứng mọi nhu cầu thị trường.
          </p>

          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Không chỉ hướng đến khách hàng cá nhân, chúng tôi còn mở rộng hợp
            tác với các doanh nghiệp từ nhà hàng, khách sạn, văn phòng đến nhà
            máy, công trình và các sự kiện, hội nghị. Mong muốn trở thành đối
            tác đáng tin cậy, mang đến sản phẩm chất lượng cao nhất và góp phần
            tối ưu hóa hình ảnh chuyên nghiệp cho khách hàng.
          </p>
        </div>
        <div className="relative group">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              className="w-xl h-108 object-cover rounded-lg shadow-xl"
              alt="Close up of a wooden tailor's workbench with fabric swatches, technical design sketches of suits, a wooden ruler, and sewing tools. The scene is bright and organized, emphasizing craftsmanship, precision, and high-quality materials in a minimalist studio setting."
              src={About}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
