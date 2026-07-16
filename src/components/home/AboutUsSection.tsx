import AboutSub1 from "@/assets/about_sub_1.webp";
import AboutSub2 from "@/assets/about_sub_2.webp";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-5">
            <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
              DI SẢN 10 NĂM
            </span>
            <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary my-3 sm:my-4 leading-tight md:leading-none">
              Về chúng tôi
            </h2>
            <div className="space-y-4 sm:space-y-6 text-on-surface-variant text-sm sm:text-base leading-relaxed">
              <p>
                Với hơn một thập kỷ kinh nghiệm trong ngành may mặc, Aurix đã
                phát triển từ một xưởng may nhỏ thành đối tác chiến lược cho
                hàng ngàn doanh nghiệp hàng đầu.
              </p>
              <p>
                Chúng tôi hiểu rằng đồng phục không chỉ là trang phục làm
                việc, mà là ngôn ngữ thị giác mạnh mẽ nhất truyền tải giá trị
                cốt lõi của một thương hiệu. Mỗi đường kim mũi chỉ đều được
                thực hiện với sự chính xác tuyệt đối, đảm bảo tính bền vững và
                thẩm mỹ chuyên nghiệp.
              </p>
              <p>
                Aurix luôn cam kết mang lại giải pháp toàn diện từ khâu tư vấn
                thiết kế, chọn lọc chất liệu đến quy trình sản xuất khép kín
                chuẩn quốc tế.
              </p>
            </div>
 
            <button
              className="cursor-pointer inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-black mt-4 transition"
              onClick={() => navigate("/cong-ty")}
            >
              Xem thêm{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="pt-6 sm:pt-12">
              <img
                className="w-full h-48 sm:h-72 md:h-100 object-cover rounded shadow-sm border border-outline-variant"
                alt="Cắt vải wool navy bằng máy công nghiệp tự động"
                src={AboutSub1}
              />
            </div>
            <div>
              <img
                className="w-full h-48 sm:h-72 md:h-100 object-cover rounded shadow-sm border border-outline-variant"
                alt="Nhà thiết kế phác thảo mẫu đồng phục"
                src={AboutSub2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;
