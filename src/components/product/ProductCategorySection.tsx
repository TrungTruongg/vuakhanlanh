const categories = [
  {
    id: 1,
    name: "Khăn Lạnh Vải Bi",
    des: "Sử dụng 100% vải không dệt chấm bi, cấu tạo từ chất liệu polyester cao cấp. Bề mặt có các chấm bi nổi tạo cảm giác mềm mại, thấm hút tốt và giữ ẩm lâu hơn so với các loại vải thông thường. Đặc biệt, cấu trúc chấm bi giúp tăng diện tích tiếp xúc, hỗ trợ làm sạch da hiệu quả mà không gây xước hay kích ứng. Được ưa chuộng rộng rãi tại nhà hàng, quán ăn, quán cà phê và các cơ sở dịch vụ ăn uống trên toàn quốc. Định lượng phổ biến từ 50g đến 90g tùy theo nhu cầu sử dụng của từng loại hình kinh doanh.",
  },
  {
    id: 2,
    name: "Khăn Lạnh Vải Lưới",
    des: "Sử dụng 100% vải không dệt dạng lưới polyester với cấu trúc sợi đan xen chặt chẽ. Các ô lưới trên bề mặt tạo cảm giác thoáng mát, sạch sẽ và dễ chịu khi sử dụng vệ sinh cá nhân. Đặc điểm nổi bật của khăn vải lưới là khả năng thoát khí tốt, giúp khăn nhanh khô hơn và không bị bám dính trên da. Loại khăn này thường được lựa chọn cho các quán ăn, nhà hàng có yêu cầu về tính thẩm mỹ và chất lượng sản phẩm. Định lượng tiêu chuẩn thường là 50g với khổ 19cm hoặc 24cm.",
  },
  {
    id: 3,
    name: "Khăn Giấy Lạnh",
    des: "Dùng 80% giấy và 20% polyester để tạo cấu trúc bền chắc cho khăn, đảm bảo độ dai khi sử dụng mà không bị rách. Khăn giấy lạnh có ưu điểm là chi phí sản xuất thấp, phù hợp cho các địa điểm cần sản phẩm khăn lạnh số lượng lớn với ngân sách tối ưu. Bề mặt khăn mịn màng, thấm hút nhanh và phân hủy sinh học tốt hơn so với khăn vải không dệt. Thường được sử dụng tại các quán ăn bình dân, quán nước, tiệm tạp hóa và các sự kiện ngoài trời.",
  },
];

const ProductCategorySection = () => {
  return (
    <section className="py-24 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-primary font-semibold text-base uppercase tracking-wider">
            Phân loại
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2 reveal reveal-in">
            Phân Loại Khăn Lạnh Phổ Biến
          </h2>
          <p className="text-black text-justify mt-3 max-w-3xl mx-auto leading-7">
            Khăn lạnh, hay còn gọi là khăn ướt hoặc khăn giấy lạnh, được phân
            thành 3 loại chính trên thị trường hiện nay dựa theo chất liệu lõi
            khăn. Việc hiểu rõ đặc điểm từng loại sẽ giúp các chủ kinh doanh nhà
            hàng, quán ăn lựa chọn được sản phẩm phù hợp nhất với nhu cầu và
            ngân sách của mình. Theo thông tin từ{" "}
            <a
              href="https://en.wikipedia.org/wiki/Polyester"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-[#15803d]"
            >
              nguyên liệu polyester
            </a>
            , đây là loại sợi tổng hợp có độ bền cao, không thấm nước và kháng
            khuẩn tốt, rất phù hợp để sản xuất khăn lạnh.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-4xl p-7 shadow-sm hover:shadow-md hover:scale-105 transition border border-[#bbf7d0]">
              <span className="material-symbols-outlined text-primary text-3xl">
                stacks
              </span>
              <h3 className="font-bold text-black mb-2 text-xl reveal reveal-in">
                {cat.name}
              </h3>
              <p className="text-black text-base text-justify leading-relaxed reveal reveal-in">
                {cat.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;
