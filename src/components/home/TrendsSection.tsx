const trends = [
  { num: "01", title: "Tiện Lợi", desc: "Không đòi hỏi giặt giũ sau mỗi lần sử dụng, dùng ngay và vứt bỏ mà không cần bảo quản." },
  { num: "02", title: "Khử Khuẩn & An Toàn", desc: "Kích thước nhỏ gọn, dùng một lần duy nhất, ngăn chặn nguy cơ lây nhiễm vi khuẩn." },
  { num: "03", title: "Di Động & Dễ Mang Theo", desc: "Kích thước nhỏ gọn, tiện lợi mang theo trong túi xách, balo, ô tô." },
  { num: "04", title: "Linh Hoạt Đa Năng", desc: "Không chỉ làm mát mà còn lau mồ hôi, lau tay, làm sạch vật dụng." },
  { num: "05", title: "Thân Thiện Môi Trường", desc: "Giảm lượng nước tiêu tốn cho giặt giũ, một số loại có thể phân hủy sinh học." },
];

export default function TrendsSection() {
  return (
    <section className="py-24 bg-surface-mint">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-primary tracking-widest">Xu hướng</span>
          <h2 className="text-headline-xl font-headline-xl mt-4">
            Khăn Lạnh Dùng Một Lần Được Ưa Chuộng
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-gutter">
          {trends.map((t) => (
            <div key={t.num} className="text-center">
              <div className="text-display-lg font-display-lg text-primary/20 mb-2">{t.num}</div>
              <h4 className="text-headline-sm font-bold font-headline-sm mb-2">{t.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}