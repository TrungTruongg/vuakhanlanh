const Footer = () => {
  return (
    <footer className="bg-surface-container-low dark:bg-tech-black border-t border-border-subtle dark:border-outline-variant py-section-padding-desktop">
      <div className="max-w-300 mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-1">
          <a
            className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim block mb-6"
            href="#"
          >
            Aurix
          </a>
          <p className="text-body-sm text-on-surface-variant mb-6">
            Nhà sản xuất khăn lạnh hàng đầu Việt Nam. Tinh hoa từ sự sạch sẽ và
            an toàn.
          </p>
          <div className="flex gap-4">
            <a
              className="text-primary hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">language</span>
            </a>
            <a
              className="text-primary hover:scale-110 transition-transform"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim mb-6">
            CHÍNH SÁCH
          </h5>
          <ul className="space-y-4">
            <li className="">
              <a
                className="text-body-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors hover:translate-x-1 inline-block"
                href="#"
              >
                Chính sách bảo hành
              </a>
            </li>
            <li className="">
              <a
                className="text-body-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors hover:translate-x-1 inline-block"
                href="#"
              >
                Chính sách bảo mật
              </a>
            </li>
            <li className="">
              <a
                className="text-body-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors hover:translate-x-1 inline-block"
                href="#"
              >
                Chính sách giao hàng
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim mb-6">
            THÔNG TIN
          </h5>
          <ul className="space-y-4">
            <li className="">
              <a
                className="text-body-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors hover:translate-x-1 inline-block"
                href="#"
              >
                Về Chúng Tôi
              </a>
            </li>
            <li className="">
              <a
                className="text-body-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors hover:translate-x-1 inline-block"
                href="#"
              >
                Blog Tin Tức
              </a>
            </li>
            <li className="">
              <a
                className="text-body-sm text-on-surface-variant dark:text-outline hover:text-primary transition-colors hover:translate-x-1 inline-block"
                href="#"
              >
                Hệ thống đại lý
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim mb-6">
            LIÊN HỆ
          </h5>
          <ul className="space-y-4 text-body-sm text-on-surface-variant">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm">
                location_on
              </span>
              <span className="">413/7/1 Lê Văn Quới, Bình Tân, Tp.HCM</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm">
                call
              </span>
              <a href="tel:0969378787" className="">
                0969.378.787
              </a>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm">
                schedule
              </span>
              <span className="">Thứ 2 - Thứ 7: 08h - 18h</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-300 mx-auto px-8 mt-16 pt-8 border-t border-border-subtle dark:border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-body-sm text-on-surface-variant">
          © 2026 Aurix Technologies. All rights reserved. Precision in Every
          Detail.
        </p>
        <div className="flex gap-8">
          <span className="text-label-caps font-label-caps text-primary">
            ISO 9001:2015
          </span>
          <span className="text-label-caps font-label-caps text-primary">
            MADE IN VIETNAM
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
