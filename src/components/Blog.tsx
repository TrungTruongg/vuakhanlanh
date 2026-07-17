import Article1 from "@/assets/blog_1.webp";
import Article2 from "@/assets/blog_2.webp";
import Article3 from "@/assets/blog_3.webp";
import Article4 from "@/assets/blog_4.webp";
import Article5 from "@/assets/blog_5.webp";

const filters = [
  "Tất cả",
  "Về Chúng Tôi",
  "Kinh Doanh",
  "Hướng Dẫn",
  "Marketing",
  "Sản Xuất",
  "Sản Phẩm",
  "Đại Lý",
];

type Article = {
  id: number;
  image: string;
  alt: string;
  tag: string;
  tagClass: string;
  date: string;
  title: string;
  excerpt: string;
};

const articles: Article[] = [
  {
    id: 1,
    image: Article1,
    alt: "Trang trí nhà hàng",
    tag: "Hướng Dẫn",
    tagClass: "bg-secondary-container",
    date: "2026-05-18",
    title: "Bí quyết trang trí nhà hàng, quán ăn đẹp hút khách năm 2026",
    excerpt:
      "Khám phá bí quyết trang trí nhà hàng, quán ăn đẹp chuyên nghiệp năm 2026. Tư vấn phong cách, chi phí, ánh sáng và nội thất giúp thu hút thực khách hiệu quả thông qua việc kết hợp đồng phục thương hiệu.",
  },
  {
    id: 2,
    image: Article2,
    alt: "Kinh doanh nhà hàng",
    tag: "Hướng Dẫn",
    tagClass: "bg-secondary-container",
    date: "2026-04-11",
    title: "Những Điều Cần Chú Ý Khi Kinh Doanh Nhà Hàng, Quán Ăn Từ A-Z",
    excerpt:
      "Khám phá những điều cần chú ý khi kinh doanh nhà hàng, quán ăn: từ pháp lý, tài chính, địa điểm, nhân sự đến marketing. Hướng dẫn xây dựng hình ảnh chuyên nghiệp cho đội ngũ nhân viên.",
  },
  {
    id: 3,
    image: Article3,
    alt: "Chiến lược marketing",
    tag: "Marketing",
    tagClass: "bg-surface-container-highest",
    date: "2026-04-02",
    title: "Chiến Lược Toàn Diện Để Thu Hút Khách Hàng",
    excerpt:
      "Bạn có bao giờ tự hỏi tại sao có những cửa hàng đông nghịt khách? Thật ra, việc đồng bộ hóa nhận diện thương hiệu từ website đến đồng phục nhân viên đóng vai trò cực kỳ quan trọng trong việc tạo niềm tin.",
  },
  {
    id: 4,
    image: Article4,
    alt: "Đồng phục cao cấp",
    tag: "Hướng Dẫn",
    tagClass: "bg-secondary-container",
    date: "2026-03-20",
    title: "Đồng Phục Cao Cấp: Hướng Dẫn Mua & Sử Dụng Hiệu Quả",
    excerpt:
      "Hướng dẫn toàn diện về lựa chọn vải, kiểu dáng và cách bảo quản đồng phục cao cấp cho doanh nghiệp. So sánh các loại vải phổ biến nhất năm 2026.",
  },
  {
    id: 5,
    image: Article5,
    alt: "Du lịch 2026",
    tag: "Hướng Dẫn",
    tagClass: "bg-secondary-container",
    date: "2026-03-17",
    title: "Cần Chuẩn Bị Gì Khi Đi Du Lịch? Checklist Toàn Diện 2026",
    excerpt:
      "Khám phá danh sách đầy đủ cần chuẩn bị gì khi đi du lịch công tác hay nghỉ dưỡng: từ giấy tờ, hành lý đến các mẫu trang phục tiện lợi cho mọi hành trình.",
  },
];

const CalendarIcon = () => (
  <svg
    className="w-3 h-3 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ArticleCard = ({
  image,
  alt,
  tag,
  tagClass,
  date,
  title,
  excerpt,
}: Article) => (
  <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
    <div className="relative overflow-hidden h-64">
      <img
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={image}
      />
      <span
        className={`absolute top-4 left-4 ${tagClass} text-on-surface px-3 py-1 text-xs font-bold rounded`}
      >
        {tag}
      </span>
    </div>
    <div className="p-6 flex flex-col grow">
      <div className="flex items-center text-gray-400 text-xs mb-3">
        <CalendarIcon />
        {date}
      </div>
      <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3 mb-6">{excerpt}</p>
      <a
        className="mt-auto text-brand-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        href="#"
      >
        Đọc thêm <span className="text-lg">→</span>
      </a>
    </div>
  </article>
);

const Blog = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Tin Tức &amp; Kiến Thức
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Cập nhật những bài viết mới nhất về đồng phục, kinh doanh, marketing
            và nhiều hơn nữa.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-white" data-purpose="filters">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={
                  i === 0
                    ? "px-5 py-2 cursor-pointer rounded-full bg-primary text-white font-medium text-sm transition-all hover:shadow-lg"
                    : "px-5 py-2 cursor-pointer rounded-full bg-blue-100 text-brand-navy hover:bg-brand-navy hover:text-white font-medium text-sm transition-all"
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="py-12 max-w-7xl mx-auto px-4" data-purpose="blog-grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </main>

      <section
        className="py-20 bg-brand-navy text-primary text-center px-4"
        data-purpose="cta-section"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bạn cần tư vấn thêm?
          </h2>
          <p className="mb-8 text-lg">
            Liên hệ ngay để nhận tư vấn miễn phí từ đội ngũ chuyên gia về giải
            pháp đồng phục tối ưu.
          </p>
          <a
            className="inline-flex gap-2 items-center bg-secondary-container hover:scale-105 text-primary px-10 py-4 rounded font-bold text-lg transition-all shadow-lg"
            href="/lien-he"
          >
            Liên Hệ Ngay
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
