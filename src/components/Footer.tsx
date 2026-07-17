import { useNavigate } from "react-router-dom";

const exploreLinks = [
  { label: "Về chúng tôi", to: "/cong-ty-dong-phuc" },
  { label: "Dự án đã thực hiện", to: "/du-an" },
  { label: "Bảng giá tham khảo", to: "/bang-gia" },
  { label: "Blog kỹ thuật may", to: "/blog" },
];

const legalLinks = [
  { label: "Chính sách bảo mật", to: "/chinh-sach-bao-mat" },
  { label: "Điều khoản sử dụng", to: "/dieu-khoan-su-dung" },
  { label: "Chính sách đổi trả", to: "/chinh-sach-doi-tra" },
  { label: "Tuyển dụng", to: "/tuyen-dung" },
];

const linkClass =
  "text-left text-sm sm:text-base text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100 cursor-pointer";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full py-10 sm:py-12 md:py-16 px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-gutter bg-surface-container-highest dark:bg-tertiary-container border-t border-outline-variant">
      <div className="col-span-1 sm:col-span-2 md:col-span-1">
        <div className="text-lg sm:text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed mb-3 sm:mb-4">
          Aurix Uniforms
        </div>
        <p className="text-sm sm:text-base text-on-surface-variant font-body-md">
          Giải pháp đồng phục doanh nghiệp uy tín hàng đầu Việt Nam. Tỉ mỉ
          trong từng đường kim mũi chỉ.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        <h5 className="text-label-caps font-bold">Khám Phá</h5>
        {exploreLinks.map((link) => (
          <button
            key={link.to}
            className={linkClass}
            onClick={() => navigate(link.to)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        <h5 className="text-label-caps font-bold">Pháp Lý</h5>
        {legalLinks.map((link) => (
          <button
            key={link.to}
            className={linkClass}
            onClick={() => navigate(link.to)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <div className="col-span-1 sm:col-span-2 md:col-span-1">
        <h5 className="text-label-caps font-bold mb-3 sm:mb-4">Newsletter</h5>
        <p className="text-sm sm:text-base text-on-surface-variant font-body-md mb-4">
          Đăng ký nhận xu hướng đồng phục mới nhất.
        </p>
        <div className="flex">
          <input
            className="bg-white border border-outline-variant px-4 py-2 w-full rounded-l focus:outline-none text-sm sm:text-base"
            placeholder="Email"
            type="email"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r shrink-0 text-sm sm:text-base">
            Gửi
          </button>
        </div>
        <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-on-surface-variant font-body-md">
          © 2026 Aurix Uniforms. Tailored Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;