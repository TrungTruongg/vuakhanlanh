import Process_1 from "@/assets/process_1.webp";
import Process_2 from "@/assets/process_2.webp";
import Process_3 from "@/assets/process_3.webp";
import Process_4 from "@/assets/process_4.webp";
import Process_5 from "@/assets/process_5.webp";
import Process_6 from "@/assets/process_6.webp";

const processes = [
  {
    id: 1,
    title: "Tư vấn & Thiết kế",
    desc: "Lắng nghe nhu cầu thương hiệu để phác thảo những mẫu thiết kế độc bản, tối ưu hóa nhận diện thương hiệu và tính tiện dụng.",
    img: Process_1,
  },
  {
    id: 2,
    title: "Chọn Vải & Phụ liệu",
    desc: "Lựa chọn các loại vải cao cấp: Cotton, Kate Mỹ, vải kháng khuẩn... đảm bảo độ bền màu và sự thoải mái tối đa cho người mặc.",
    img: Process_2,
  },
  {
    id: 3,
    title: "May mẫu",
    desc: "Sản xuất sản phẩm mẫu thực tế để khách hàng kiểm duyệt phom dáng, đường kim mũi chỉ và chất lượng in thêu trước khi sản xuất hàng loạt.",
    img: Process_3,
  },
  {
    id: 4,
    title: "Sản xuất hàng loạt",
    desc: "Vận hành dây chuyền may hiện đại với sự giám sát chặt chẽ. Áp dụng công nghệ cắt laser tự động để đảm bảo độ chính xác tuyệt đối trên hàng nghìn sản phẩm.",
    img: Process_4,
  },
  {
    id: 5,
    title: "Kiểm tra chất lượng (QC)",
    desc: "Mọi sản phẩm đều phải trải qua 3 vòng kiểm tra nghiêm ngặt về thông số kỹ thuật, lỗi vải và độ bền đường may.",
    img: Process_5,
  },
  {
    id: 6,
    title: "Đóng gói & Giao hàng",
    desc: "Sản phẩm được là ủi phẳng, đóng gói chuyên nghiệp theo tiêu chuẩn cao cấp và giao tận nơi đúng tiến độ cam kết.",
    img: Process_6,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
            THE AURIX STANDARD
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-black mt-2 sm:mt-4 mb-3 sm:mb-4">
            Quy Trình May Đo Chuẩn Xuất Khẩu
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-gutter">
          {processes.map((process) => (
            <div
              key={process.id}
              className="step-card bg-surface-container-lowest cursor-pointer border border-outline-variant p-6 sm:p-8 transition-all hover:shadow-xl group"
            >
              <div className="step-number w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 border-secondary text-secondary font-bold mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
                0{process.id}
              </div>
              <h3 className=" text-black font-bold mb-2 sm:mb-4">
                {process.title}
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant mb-4 sm:mb-6">
                {process.desc}
              </p>
              <div className="h-40 sm:h-48 w-full bg-surface-container overflow-hidden rounded">
                <img
                  className="w-full h-full object-cover transition-all duration-500"
                  src={process.img}
                  alt={process.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
