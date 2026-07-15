const documents = [
  {
    id: 1,
    title: "Workwear – Wikipedia",
    des: "Tổng quan lịch sử và phân loại trang phục làm việc trên thế giới.",
    href: "https://en.wikipedia.org/wiki/Workwear",
  },
  {
    id: 2,
    title: "Twill – Wikipedia",
    des: "Kỹ thuật dệt vải chéo (kaki) tạo độ bền và khả năng chống nhăn cho đồng phục.",
    href: "https://en.wikipedia.org/wiki/Twill",
  },
  {
    id: 3,
    title: "Cotton – Wikipedia",
    des: "Nguyên liệu sợi bông tự nhiên phổ biến trong may đồng phục thấm hút mồ hôi.",
    href: "https://en.wikipedia.org/wiki/Cotton",
  },
  {
    id: 4,
    title: "Uniform – Wikipedia",
    des: "Khái niệm và vai trò của đồng phục trong nhận diện tổ chức, doanh nghiệp.",
    href: "https://en.wikipedia.org/wiki/Uniform",
  },
  {
    id: 5,
    title: "Made-to-measure – Wikipedia",
    des: "Phương pháp may đo theo số đo cá nhân, đảm bảo form dáng vừa vặn hơn hàng may sẵn.",
    href: "https://en.wikipedia.org/wiki/Made-to-measure",
  },
  {
    id: 6,
    title: "Chino cloth – Wikipedia",
    des: "Vải kaki chéo bền chắc, gốc từ quân phục, nay phổ biến trong đồng phục công sở.",
    href: "https://en.wikipedia.org/wiki/Chino_cloth",
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
