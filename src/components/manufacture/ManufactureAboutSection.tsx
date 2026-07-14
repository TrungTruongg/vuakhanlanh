import { useNavigate } from "react-router-dom";
import Banner from "@/assets/aboutus.webp";
const checkLists = [
  {
    id: 1,
    name: "Đạt chứng nhận ISO 9001:2015",
  },
  {
    id: 2,
    name: "Nguyên liệu đạt tiêu chuẩn an toàn cho da",
  },
  {
    id: 3,
    name: "Tuân thủ quy trình VSATTP nghiêm ngặt",
  },
  {
    id: 4,
    name: "Kiểm soát chất lượng từng lô hàng",
  },
  {
    id: 5,
    name: "Sản xuất đúng kích thước, đúng định lượng",
  },
  {
    id: 6,
    name: "Sử dụng nước tinh khiết RO đa tầng lọc",
  },
];

const ManufactureAboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#f0fdf4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-base uppercase tracking-wider">
              Về sản xuất
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6 reveal reveal-in">
              Nhà Máy Sản Xuất Hiện Đại
            </h2>
            <p className="text-black text-justify leading-relaxed mb-4 reveal reveal-in">
              Vua Khăn Lạnh sở hữu nhà máy sản xuất tại TP.HCM với dây chuyền tự
              động hóa hoàn toàn. Công suất đạt hàng triệu khăn mỗi tháng, đáp
              ứng nhu cầu cho mọi đối tượng khách hàng từ cá nhân đến doanh
              nghiệp lớn.
            </p>
            <p className="text-black text-justify leading-relaxed mb-4 reveal reveal-in">
              Mỗi sản phẩm khăn lạnh được sản xuất từ nguyên liệu loại 1. Vải bi
              chất lượng cao kết hợp nước tinh khiết qua công nghệ Nano, hương
              liệu tự nhiên và hoạt chất GLYCERIN dưỡng ẩm da. Quy trình tẩm
              hương với tỷ lệ 99,5% nước và 0,5% phụ gia, chất bảo quản an toàn.
            </p>
            <p className="text-black text-justify leading-relaxed mb-6 reveal reveal-in">
              Khăn lạnh sau khi tẩm hương sẽ qua khâu ép nước, cắt và đóng gói
              tự động. Máy đóng gói bao bì có hệ thống nhiệt dọc và nhiệt ngang
              để ép bao bì dính kín, đảm bảo vệ sinh và ngăn vi khuẩn xâm nhập.
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
              className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#15803d] transition btn-b2b"
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
                alt="Nhà máy sản xuất khăn lạnh"
                loading="lazy"
                src={Banner}
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
