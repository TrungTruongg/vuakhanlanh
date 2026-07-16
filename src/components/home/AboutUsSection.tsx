import AboutSub1 from "@/assets/about_sub_1.webp";
import AboutSub2 from "@/assets/about_sub_2.webp";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-margin-desktop overflow-hidden max-w-container-max mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
            DI SẢN 10 NĂM
          </span>
          <h2 className="font-display-lg text-display-lg text-primary my-4 leading-none">
            Về chúng tôi
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            <p>
              Với hơn một thập kỷ kinh nghiệm trong ngành may mặc, Aurix đã phát
              triển từ một xưởng may nhỏ thành đối tác chiến lược cho hàng ngàn
              doanh nghiệp hàng đầu.
            </p>
            <p>
              Chúng tôi hiểu rằng đồng phục không chỉ là trang phục làm việc, mà
              là ngôn ngữ thị giác mạnh mẽ nhất truyền tải giá trị cốt lõi của
              một thương hiệu. Mỗi đường kim mũi chỉ đều được thực hiện với sự
              chính xác tuyệt đối, đảm bảo tính bền vững và thẩm mỹ chuyên
              nghiệp.
            </p>
            <p>
              Aurix luôn cam kết mang lại giải pháp toàn diện từ khâu tư vấn
              thiết kế, chọn lọc chất liệu đến quy trình sản xuất khép kín chuẩn
              quốc tế.
            </p>
          </div>

          <button
            className="cursor-pointer inline-flex items-center gap-2 text-base font-semibold text-black mt-4 transition"
            onClick={() => navigate("cong-ty")}
          >
            Xem thêm{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <div className="pt-12">
            <img
              className="w-full h-100 object-cover rounded shadow-sm border border-outline-variant"
              data-alt="A close-up, high-detail macro shot of navy blue wool fabric being precisely cut by automated industrial machinery. The lighting is crisp and cool, highlighting the fine texture of the weave. The scene conveys a sense of technological precision and high-grade material quality in a modern factory setting."
              src={AboutSub1}
            />
          </div>
          <div>
            <img
              className="w-full h-100 object-cover rounded shadow-sm border border-outline-variant"
              data-alt="A professional fashion designer in a well-lit, modern studio sketching uniform concepts on a digital tablet. Behind them, a wall of premium textile samples in various shades of navy, grey, and gold are neatly organized. The workspace is clean, minimalist, and professional, bathed in natural light."
              src={AboutSub2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
