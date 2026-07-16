import DP1 from "@/assets/dongphuc_1.webp";
import DP2 from "@/assets/dongphuc_2.webp";
import DP3 from "@/assets/dongphuc_3.webp";
import DP4 from "@/assets/dongphuc_4.webp";

const items = [
  {
    img: DP1,
    alt: "Đồng phục công sở vest và sơ mi cao cấp",
    title: "Đồng Phục Công Sở",
    desc: "Vest, sơ mi, quần tây cao cấp cho khối văn phòng.",
    span: "md:col-span-8",
  },
  {
    img: DP2,
    alt: "Đồng phục bảo hộ lao động cam navy phản quang",
    title: "Đồng Phục Bảo Hộ",
    desc: "",
    span: "md:col-span-4",
  },
  {
    img: DP3,
    alt: "Đồng phục y tế blouse xanh trắng",
    title: "Đồng Phục Y Tế",
    desc: "",
    span: "md:col-span-4",
  },
  {
    img: DP4,
    alt: "Đồng phục học sinh áo thun và chân váy",
    title: "Đồng Phục Trường Học",
    desc: "Thiết kế trẻ trung, năng động, chất liệu thấm hút mồ hôi.",
    span: "md:col-span-8",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="relative max-w-7xl mx-auto reveal reveal-in">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest text-xs sm:text-sm">
            Giải Pháp Của Chúng Tôi
          </span>
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-black mt-2 sm:mt-4 mb-3 sm:mb-4">
            Danh Mục Sản Phẩm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className={`relative overflow-hidden group h-64 sm:h-72 md:h-80 rounded-lg md:rounded-none col-span-1 ${item.span}`}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={item.alt}
                src={item.img}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 text-white">
                <h3 className="text-lg sm:text-xl md:text-headline-md font-bold">
                  {item.title}
                </h3>
                {item.desc && (
                  <p className="font-body-md text-sm sm:text-base opacity-80 mt-1">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
