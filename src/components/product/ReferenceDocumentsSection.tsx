const documents = [
  {
    id: 1,
    title: "Nonwoven fabric – Wikipedia",
    des: "Tổng quan về vải không dệt và các ứng dụng trong đời sống.",
    href: "https://en.wikipedia.org/wiki/Nonwoven_fabric",
  },
  {
    id: 2,
    title: "Reverse Osmosis – Wikipedia",
    des: "Công nghệ lọc nước thẩm thấu ngược RO được sử dụng trong sản xuất khăn lạnh.",
    href: "https://en.wikipedia.org/wiki/Reverse_osmosis",
  },
  {
    id: 3,
    title: "BOPP (Biaxially Oriented Polypropylene) – Wikipedia",
    des: "Vật liệu bao bì phổ biến cho khăn lạnh vỏ thường.",
    href: "https://en.wikipedia.org/wiki/Biaxially_oriented_polypropylene",
  },
  {
    id: 4,
    title: "ISO Standards – International Organization for Standardization",
    des: "Nền tảng tiêu chuẩn quốc tế cho TCVN 11528:2016.",
    href: "https://www.iso.org/standard/45396.html",
  },
  {
    id: 5,
    title: "Wet wipe – Wikipedia",
    des: "Tổng quan về ngành công nghiệp khăn ướt trên thế giới.",
    href: "https://en.wikipedia.org/wiki/Wet_wipe",
  },
  {
    id: 6,
    title: "Polyester – Wikipedia",
    des: "Nguyên liệu sợi polyester sử dụng trong sản xuất khăn lạnh.",
    href: "https://en.wikipedia.org/wiki/Polyester",
  },
];

const ReferenceDocumentsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 reveal reveal-in">
        <h3 className="text-xl font-semibold text-black mb-4 reveal reveal-in">
          Tài Liệu Tham Khảo
        </h3>
        <ul className="space-y-2 text-base text-black">
          {documents.map((doc) => (
            <li key={doc.id}>
              <span className="text-black mr-2">[{doc.id}]</span>
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16a34a] underline hover:text-[#15803d]"
              >
                {doc.title}
              </a>{" "}
              – {doc.des}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReferenceDocumentsSection;
