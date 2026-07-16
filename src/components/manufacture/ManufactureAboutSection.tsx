import { useNavigate } from "react-router-dom";
import About from "@/assets/about_sub_1.webp";

const checkLists = [
  {
    id: 1,
    name: "Đạt chứng nhận ISO 9001:2015",
  },
  {
    id: 2,
    name: "Vải đầu vào kiểm định độ bền màu, độ co giãn",
  },
  {
    id: 3,
    name: "Tuân thủ quy trình may đo chuẩn xuất khẩu",
  },
  {
    id: 4,
    name: "Kiểm soát chất lượng từng đường may",
  },
  {
    id: 5,
    name: "Sản xuất đúng size, đúng số đo yêu cầu",
  },
  {
    id: 6,
    name: "Hệ thống máy cắt, may công nghiệp hiện đại",
  },
];

const ManufactureAboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
              Về sản xuất
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6 reveal reveal-in">
              Xưởng May Đồng Phục Hiện Đại
            </h2>
            <p className="text-black text-justify leading-relaxed mb-4 reveal reveal-in">
              Aurix Uniforms sở hữu xưởng may tại TP.HCM với hệ thống máy cắt,
              may công nghiệp hiện đại. Công suất đạt hàng nghìn bộ đồng phục
              mỗi tháng, đáp ứng nhu cầu từ cửa hàng nhỏ đến chuỗi doanh nghiệp,
              nhà hàng, khách sạn quy mô lớn.
            </p>
            <p className="text-black text-justify leading-relaxed mb-4 reveal reveal-in">
              Mỗi bộ đồng phục được may từ chất liệu vải loại 1 — Kate, Kaki,
              Cotton co giãn 4 chiều tùy theo mục đích sử dụng. Vải đầu vào được
              kiểm định kỹ về độ bền màu, độ co rút và khả năng thấm hút trước
              khi đưa vào sản xuất, đảm bảo form dáng ổn định sau nhiều lần
              giặt.
            </p>
            <p className="text-black text-justify leading-relaxed mb-6 reveal reveal-in">
              Sau khi lên rập và cắt theo số đo, sản phẩm được may bằng máy công
              nghiệp với đường chỉ chắc chắn, kiểm tra kỹ từng chi tiết trước
              khi ủi form và đóng gói. Đội ngũ QC kiểm tra 100% sản phẩm trước
              khi xuất xưởng, đảm bảo không sai size, không lỗi đường may.
            </p>
            <div className="space-y-3 mb-8">
              {checkLists.map((list) => (
                <div key={list.id} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                  <span className="text-black text-base">{list.name}</span>
                </div>
              ))}
            </div>
            <button
              className="inline-flex items-center cursor-pointer gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-semibold hover:opacity-95 transition-opacity"
              onClick={() => navigate("/qua-tang")}
            >
              Nhận Báo Giá{" "}
              <span className="material-symbols-outlined text-white">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#f0fdf4] rounded-3xl -z-10"></div>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                alt="Xưởng may đồng phục Aurix Uniforms"
                loading="lazy"
                src={About}
                className="object-cover w-xl h-108"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufactureAboutSection;
