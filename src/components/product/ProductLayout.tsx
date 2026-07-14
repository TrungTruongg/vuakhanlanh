import FAQSection from "../home/FAQSection";
import ProductShowcase from "../home/ProductShowcase";
import StatsSection from "../home/StatsSection";
import ProductCategorySection from "./ProductCategorySection";
import ProductComponentsSection from "./ProductComponentsSection";
import ReferenceDocumentsSection from "./ReferenceDocumentsSection";

const images = Object.values(
  import.meta.glob("@/assets/kl*.webp", { eager: true, import: "default" }),
) as string[];

const products = [
  {
    id: 1,
    tag: "Dòng phổ thông",
    name: "Khăn Lạnh Quận 1",
    price: "350đ/khăn",
    image: images[0],
  },
  {
    id: 2,
    tag: "Dòng cao cấp",
    name: "Khăn Lạnh Quận 2",
    price: "680đ/khăn",
    image: images[1],
  },
  {
    id: 3,
    tag: "Dòng eco-friendly",
    name: "Khăn Lạnh Quận 3",
    price: "520đ/khăn",
    image: images[2],
  },
  {
    id: 4,
    tag: "Dòng premium",
    name: "Khăn Lạnh Quận 4",
    price: "380đ/khăn",
    image: images[3],
  },
  {
    id: 5,
    tag: "",
    name: "Khăn Lạnh Quận 5",
    price: "480đ/khăn",
    image: images[4],
  },
  {
    id: 6,
    tag: "",
    name: "Khăn Lạnh Quận 6",
    price: "180đ/khăn",
    image: images[5],
  },
  {
    id: 7,
    tag: "",
    name: "Khăn Lạnh Quận 7",
    price: "220đ/khăn",
    image: images[6],
  },
  {
    id: 8,
    tag: "",
    name: "Khăn Lạnh Quận 8",
    price: "390đ/khăn",
    image: images[7],
  },
];

const ProductLayout = () => {
  return (
    <main className="min-h-screen">
      <section className="relative bg-[#f0fdf4] py-10 sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-[url('./assets/aboutus.webp')] opacity-25 bg-cover bg-center reveal reveal-in"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center reveal reveal-in">
          <span className="text-primary font-semibold text-base uppercase tracking-wider">
            KIẾN THỨC KHĂN LẠNH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-black reveal reveal-in">
            Khăn Lạnh Là Gì? Quy Trình Sản Xuất Và Công Dụng
          </h1>
          <p className="text-black text-justify text-base sm:text-lg md:text-xl max-w-3xl mx-auto reveal reveal-in">
            Tìm hiểu đầy đủ về khăn lạnh: khái niệm, phân loại chi tiết (vải bi,
            vải lưới, giấy), thành phần cấu tạo (vỏ khăn BOPP, vỏ kẽm, lõi bi,
            lõi lưới, lõi P), các ưu điểm vượt trội, hệ thống máy móc sản xuất
            hiện đại, quy trình 6 bước đạt chuẩn và tiêu chuẩn quốc gia TCVN
            11528:2016.
          </p>
        </div>
      </section>

      <div className="h-6 sm:h-8 bg-linear-to-b from-[#f0fdf4] to-white"></div>

      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 reveal reveal-in">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <span className="text-[#16a34a] font-semibold text-base uppercase tracking-wider">
              Giới thiệu
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2 reveal reveal-in">
              Khăn Lạnh Là Gì?
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-black text-justify leading-relaxed space-y-4">
            <p>
              Khăn lạnh hiện nay đã trở thành vật dụng quen thuộc và không thể
              thiếu trong đời sống hằng ngày của người Việt. Không chỉ hỗ trợ
              giữ gìn vệ sinh cá nhân, làm mát tức thì mà còn được dùng trong
              quá trình chăm sóc da và tẩy trang vô cùng tiện lợi. Bên cạnh đó,
              khăn lạnh còn đóng vai trò như một phương tiện quảng bá thương
              hiệu hiệu quả dành cho các nhà hàng, quán ăn, quán cà phê hay quán
              bar. Với đặc tính nhỏ gọn, dùng một lần và giá thành hợp lý, khăn
              lạnh ngày càng được ưa chuộng và phổ biến rộng rãi trên thị
              trường.
            </p>
            <p>
              Khăn lạnh được sản xuất từ chất liệu{" "}
              <strong>vải không dệt</strong> hoặc <strong>giấy Alex</strong>,
              kết hợp với hơn <strong>99,5% nước tinh khiết RO</strong> đã qua
              hệ thống lọc thẩm thấu ngược hiện đại. Bên cạnh đó, sản phẩm còn
              chứa một lượng nhỏ chất bảo quản an toàn cho da và hương liệu tạo
              mùi nhẹ nhàng, dễ chịu. Theo đúng tiêu chuẩn TCVN 11528:2016, khăn
              lạnh thường được làm mát ở nhiệt độ từ 5 đến 10 độ C trước khi sử
              dụng nhằm mang lại cảm giác sảng khoái và hỗ trợ vệ sinh cá nhân
              hiệu quả nhất.
            </p>
            <p>
              Trên thị trường hiện nay, khăn lạnh được sản xuất với nhiều kích
              thước khác nhau như 19x18cm, 19x20cm, 20x24cm và 24x24cm, đáp ứng
              đa dạng nhu cầu từ các quán ăn bình dân cho đến nhà hàng, khách
              sạn cao cấp. Mỗi chiếc khăn lạnh đều trải qua quy trình kiểm soát
              chất lượng nghiêm ngặt từ khâu lựa chọn nguyên liệu, pha chế dung
              dịch, đến đóng gói thành phẩm, đảm bảo an toàn tuyệt đối cho người
              sử dụng.
            </p>
          </div>
        </div>
      </section>

      <ProductShowcase products={products} />
      <ProductCategorySection />
      <div className="h-6 sm:h-8 bg-linear-to-b from-[#f0fdf4] to-white"></div>
      <ProductComponentsSection />
      <FAQSection bg="bg-white"/>
      <StatsSection />
      <ReferenceDocumentsSection />
    </main>
  );
};

export default ProductLayout;
