import AboutMain from "@/assets/aboutus.webp";
import AboutSub1 from "@/assets/bi.webp";
import AboutSub2 from "@/assets/alex.webp";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
    const navigate = useNavigate();
  return (
    <section className="py-24 bg-white">
        <div className="max-w-300 mx-auto px-8 grid md:grid-cols-2 gap-gutter ">
          <div>
            <span className="text-label-caps text-xl text-primary uppercase tracking-widest">
              Về chúng tôi
            </span>
            <h2 className="text-headline-xl font-headline-xl mt-4 mb-6">
              Khăn Lạnh An Toàn — Uy Tín Với Giá Tốt
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
              Vua Khăn Lạnh được thành lập với sứ mệnh cung cấp giải pháp khăn
              lạnh chất lượng cao, an toàn vệ sinh và giá cả phù hợp cho thị
              trường Việt Nam. Với hơn 10 năm hoạt động, chúng tôi không ngừng
              đầu tư vào công nghệ sản xuất hiện đại, mở rộng danh mục từ khăn
              lạnh dùng một lần đơn giản đến dòng cao cấp in logo, đạt chứng
              nhận ISO 9001:2015.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-4xl">
                  check_circle
                </span>
                Hơn 10 năm kinh nghiệm sản xuất
              </div>

              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-4xl">
                  check_circle
                </span>
                Đạt chứng nhận ISO 9001:2015
              </div>

              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-4xl">
                  check_circle
                </span>
                Nguyên liệu an toàn, thân thiện môi trường
              </div>

              <div className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-primary text-4xl">
                  check_circle
                </span>
                Dây chuyền sản xuất hiện đại, tự động hóa
              </div>
            </div>

            <button
              className="cursor-pointer inline-flex items-center gap-2 text-base font-semibold text-black hover:text-[#16a34a] transition"
              onClick={() => navigate("cong-ty-khan-lanh")}
            >
              Xem thêm{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 h-auto">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={AboutMain}
                alt="Nhà máy sản xuất khăn lạnh"
                className="w-full h-105 object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={AboutSub1}
                  alt="Sản phẩm khăn lạnh"
                  className="w-full h-82 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={AboutSub2}
                  alt="Sản phẩm khăn lạnh"
                  className="w-full h-82 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUsSection