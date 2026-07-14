import Component_1 from "@/assets/mangngoc.webp";
import Component_2 from "@/assets/vaibi.webp";
import Component_3 from "@/assets/bi.webp";

const ProductComponentsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-[#16a34a] font-semibold text-base uppercase tracking-wider">
            Thành phần
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2 reveal reveal-in">
            Thành Phần Cấu Thành Khăn Lạnh
          </h2>
          <p className="text-black text-justify mt-3 max-w-3xl mx-auto reveal reveal-in">
            Thị trường hiện nay cung cấp rất nhiều loại khăn ướt với mẫu mã và
            chất liệu đa dạng. Một chiếc khăn lạnh hoàn chỉnh bao gồm hai phần
            chính: vỏ khăn (bao bì bên ngoài) và lõi khăn (phần vải hoặc giấy
            bên trong). Hiểu rõ thành phần cấu tạo giúp bạn dễ dàng lựa chọn sản
            phẩm phù hợp với mục đích sử dụng và đối tượng khách hàng.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 flex items-center gap-3 reveal reveal-in">
              <span className="material-symbols-outlined text-primary text-3xl">
                package_2
              </span>
              Vỏ Khăn Lạnh
            </h3>
            <p className="text-black text-justify mb-6 reveal reveal-in">
              Vỏ khăn là phần bao bọc bên ngoài, có nhiệm vụ bảo vệ và chứa đựng
              lõi khăn bên trong khỏi bụi bẩn, ẩm mốc và biến chất. Vỏ khăn cũng
              là nơi in ấn thông tin thương hiệu và logo. Vỏ thường được làm từ
              vật liệu{" "}
              <a
                href="https://en.wikipedia.org/wiki/Biaxially_oriented_polypropylene"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16a34a] underline hover:text-[#15803d]"
              >
                BOPP (Biaxially Oriented Polypropylene)
              </a>{" "}
              hoặc vỏ kẽm Metallized PET tùy theo phân khúc sản phẩm.
            </p>
            <div className="grid gap-4">
              <div className="bg-white rounded-4xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
                <h4 className="font-serif font-bold text-black mb-2">
                  Vỏ Thường (BOPP)
                </h4>
                <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                  Còn gọi là vỏ màng ngọc (Biaxial Oriented Polypropylene), được
                  làm từ chất liệu nhựa PP nguyên sinh. Bền dai, độ kéo dãn và
                  đàn hồi tốt, chịu được va đập trong quá trình vận chuyển. Vỏ
                  BOPP có khả năng chống thấm nước và ngăn cản sự xâm nhập của
                  vi khuẩn từ bên ngoài. Chi phí sản xuất thấp hơn so với vỏ
                  kẽm, phù hợp cho các cơ sở kinh doanh cần tối ưu ngân sách.
                  Thường được sử dụng ở các quán nhậu, nhà hàng, quán karaoke
                  quy mô nhỏ hoặc vừa.
                </p>
              </div>
              <div className="bg-white rounded-4xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
                <h4 className="font-serif font-bold text-black mb-2">
                  Vỏ Kẽm (Metallized PET)
                </h4>
                <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                  Vỏ bao được ghép nhiều lớp với công nghệ ép màng tiên tiến:
                  lớp ngoài là nhựa bóng hoặc mờ tạo thẩm mỹ, lớp trong tráng
                  kim loại trắng giúp bảo vệ lõi khăn tốt hơn trước ánh sáng,
                  nhiệt độ và độ ẩm. Vỏ kẽm có khả năng giữ hương liệu lâu hơn
                  và tạo cảm giác cao cấp khi cầm nắm. Thường dùng ở nhà hàng,
                  khách sạn, quán bar, quán karaoke cao cấp và các chuỗi cửa
                  hàng ẩm thực sang trọng.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              alt="Các loại vỏ khăn lạnh phổ biến"
              loading="lazy"
              className="object-cover w-147 h-110.25"
              src={Component_1}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 grid grid-rows-2 gap-4">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                alt="Lõi khăn lạnh vải bi"
                loading="lazy"
                className="object-cover w-147 h-110.25"
                src={Component_2}
              ></img>
            </div>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                alt="Lõi khăn lạnh vải lưới"
                loading="lazy"
                className="object-cover w-147 h-110.25"
                src={Component_3}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 flex items-center gap-3 reveal reveal-in">
              <span className="material-symbols-outlined text-primary text-3xl">
                water_drops
              </span>
              Lõi Khăn Lạnh
            </h3>
            <p className="text-black text-justify mb-6 reveal reveal-in">
              Lõi khăn là phần tiếp xúc trực tiếp với da người sử dụng, thường
              được sản xuất từ vải không dệt chất lượng cao. Lõi khăn có khả
              năng ngấm nước nhanh chóng, giữ ẩm tốt, không xù lông và hoàn toàn
              không gây kích ứng da. Tùy theo định lượng và loại vải mà lõi khăn
              sẽ có độ dày, độ mềm và cảm giác sử dụng khác nhau.
            </p>
            <div className="grid gap-4">
              <div className="bg-white rounded-4xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
                <h4 className="font-serif font-bold text-black mb-2">
                  Khăn Lõi Lưới
                </h4>
                <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                  Khăn đặc trưng với các ô dạng lưới đan xen trên bề mặt, được
                  dệt từ sợi polyester không dệt chất lượng cao. Cảm giác thoáng
                  mát, sạch sẽ và nhẹ nhàng khi sử dụng, không để lại xơ vải
                  trên da. Khăn lõi lưới có khả năng thấm hút nhanh và thoát khí
                  tốt, giúp da không bị bí sau khi lau. Định lượng cơ bản: Khăn
                  Lưới 50g với khổ 19cm và 24cm. Được nhiều quán ăn và nhà hàng
                  lựa chọn nhờ giá thành cạnh tranh và chất lượng ổn định.
                </p>
              </div>
              <div className="bg-white rounded-4xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
                <h4 className="font-serif font-bold text-black mb-2">
                  Khăn Lõi Bi
                </h4>
                <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                  Loại khăn phổ biến nhất trên thị trường với bề mặt chấm bi nổi
                  đặc trưng, tạo hiệu ứng massage nhẹ nhàng khi lau. Có nhiều
                  mức định lượng đáp ứng đa dạng nhu cầu: Bi 50g (quán nhỏ, tiệm
                  trà sữa), Bi 55g (đa năng cho nhiều loại hình), Bi 60g–65g
                  (nhà hàng lớn, quán hải sản), Bi 70g–75g (quán nhậu lớn, quán
                  ốc, quán lẩu), Bi 90g (phòng bida, khách sạn lớn, khu resort).
                  Định lượng càng cao thì khăn càng dày, thấm hút càng tốt và
                  cảm giác sử dụng càng cao cấp.
                </p>
              </div>
              <div className="bg-white rounded-4xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
                <h4 className="font-serif font-bold text-black mb-2">
                  Khăn Lõi P
                </h4>
                <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                  Lõi dày tương tự khăn bi nhưng có họa tiết bề mặt đặc trưng và
                  tinh tế hơn, mang lại cảm giác sang trọng khi sử dụng. Vải lõi
                  P được sản xuất với công nghệ dập nổi tiên tiến, tạo ra bề mặt
                  mịn màng và đồng đều. Phù hợp cho nhà hàng cao cấp, quán bar
                  sang trọng, quán cà phê thương hiệu, phòng VIP và các cơ sở
                  lưu trú đẳng cấp. Đây là lựa chọn lý tưởng cho những doanh
                  nghiệp muốn thể hiện sự chuyên nghiệp và đẳng cấp dịch vụ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComponentsSection;
