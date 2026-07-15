const Footer = () => {
  return (
    <footer className="w-full py-16 px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-container-highest dark:bg-tertiary-container border-t border-outline-variant">
      <div className="col-span-1 md:col-span-1">
        <div className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed mb-4">
          Aurix Uniforms
        </div>
        <p className="text-on-surface-variant font-body-md">
          Giải pháp đồng phục doanh nghiệp uy tín hàng đầu Việt Nam. Tỉ mỉ trong
          từng đường kim mũi chỉ.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-label-caps font-bold">Khám Phá</h5>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="/cong-ty-dong-phuc"
        >
          Về chúng tôi
        </a>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Dự án đã thực hiện
        </a>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Bảng giá tham khảo
        </a>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Blog kỹ thuật may
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-label-caps font-bold">Pháp Lý</h5>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Chính sách bảo mật
        </a>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Điều khoản sử dụng
        </a>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Chính sách đổi trả
        </a>
        <a
          className="text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed underline transition-opacity opacity-80 hover:opacity-100"
          href="#"
        >
          Tuyển dụng
        </a>
      </div>
      <div>
        <h5 className="text-label-caps font-bold mb-4">Newsletter</h5>
        <p className="text-on-surface-variant font-body-md mb-4">
          Đăng ký nhận xu hướng đồng phục mới nhất.
        </p>
        <div className="flex">
          <input
            className="bg-white border border-outline-variant px-4 py-2 w-full rounded-l focus:outline-none"
            placeholder="Email"
            type="email"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-r">Gửi</button>
        </div>
        <div className="mt-8 text-on-surface-variant font-body-md">
          © 2026 Aurix Uniforms. Tailored Excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
