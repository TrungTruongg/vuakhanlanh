import Showcase_1 from "@/assets/showcase_1.webp";
import Showcase_2 from "@/assets/showcase_2.webp";
import Showcase_3 from "@/assets/showcase_3.webp";
import Showcase_4 from "@/assets/showcase_4.webp";
import Showcase_5 from "@/assets/showcase_5.webp";
import { useNavigate } from "react-router-dom";

type Product = {
  tier: "premium" | "standard";
  series: string;
  title: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    tier: "premium",
    series: "Executive Series",
    title: "Bộ Vest Công Sở Premium",
    description: "Vải Wool Ý cao cấp, chống nhăn, giữ form hoàn hảo.",
    image: Showcase_1,
  },
  {
    tier: "standard",
    series: "Comfort Line",
    title: "Áo Thun Polo Doanh Nghiệp",
    description:
      "Chất liệu Cotton 100% co giãn 4 chiều, thấm hút mồ hôi cực tốt.",
    image: Showcase_2,
  },
  {
    tier: "standard",
    series: "Industrial Strength",
    title: "Đồ Bảo Hộ Kỹ Thuật",
    description:
      "Vải Kaki Pangrim chống mài mòn, bền bỉ trong môi trường khắc nghiệt.",
    image: Showcase_3,
  },
  {
    tier: "premium",
    series: "Hospitality Elite",
    title: "Áo Sơ Mi Kate Silk",
    description:
      "Chất vải mịn màng, ít nhăn, phù hợp cho môi trường dịch vụ cao cấp.",
    image: Showcase_4,
  },
  {
    tier: "premium",
    series: "Corporate Core",
    title: "Quần Tây Slim-Fit",
    description:
      "Thiết kế hiện đại, tôn dáng, chất liệu co giãn nhẹ tạo sự thoải mái.",
    image: Showcase_5,
  },
];

const tierLabel: Record<Product["tier"], string> = {
  premium: "Dòng Cao Cấp",
  standard: "Dòng Phổ Thông",
};

const tierBadgeClass: Record<Product["tier"], string> = {
  premium: "bg-secondary-container text-on-secondary-container",
  standard: "bg-surface-container-highest text-on-surface",
};

const ProductCard = ({ tier, series, title, description, image }: Product) => (
  <div className="group border border-[#E9ECEF] bg-white transition-all hover:shadow-lg">
    <div className="relative overflow-hidden aspect-3/4">
      <div
        role="img"
        aria-label={title}
        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        className={`absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-1 text-[10px] sm:text-label-caps font-label-caps font-bold ${tierBadgeClass[tier]}`}
      >
        {tierLabel[tier]}
      </div>
    </div>
    <div className="p-5 sm:p-6">
      <p className="text-label-caps font-label-caps text-outline mb-1 text-xs sm:text-sm">
        {series}
      </p>
      <h3 className="text-lg sm:text-xl font-headline-md text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-on-surface-variant mb-4">
        {description}
      </p>
      <button className="w-full py-2.5 sm:py-3 border-2 border-primary text-primary text-xs sm:text-sm font-label-caps hover:bg-primary hover:text-white transition-colors">
        Xem Chi Tiết
      </button>
    </div>
  </div>
);

const ProductDisplaySection = () => {
  const navigate = useNavigate();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-gutter mb-16 sm:mb-24">
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}

      <div className="bg-primary-container text-white p-6 sm:p-8 flex flex-col justify-center items-start">
        <span className="material-symbols-outlined text-3xl sm:text-4xl text-secondary-container mb-4 sm:mb-6">
          design_services
        </span>
        <h3 className="text-lg sm:text-xl font-display-lg mb-3 sm:mb-4 text-white">
          Bạn cần thiết kế riêng?
        </h3>
        <p className="text-sm sm:text-base text-on-primary-container mb-6 sm:mb-8">
          Chúng tôi cung cấp giải pháp đồng phục toàn diện từ lên ý tưởng, chọn
          vải đến sản xuất hàng loạt.
        </p>
        <button
          onClick={() => navigate("/lien-he")}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-white text-primary cursor-pointer font-bold text-xs sm:text-sm rounded hover:bg-secondary-container transition-colors"
        >
          Liên Hệ Ngay
        </button>
      </div>
    </section>
  );
};

export default ProductDisplaySection;