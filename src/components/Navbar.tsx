import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Trang chủ", to: "/" },
  { label: "Sản phẩm", to: "/san-pham" },
  { label: "Quy trình", to: "/quy-trinh" },
  { label: "Về Chúng Tôi", to: "/cong-ty" },
  { label: "Blog", to: "/blog" },
  { label: "Liên Hệ", to: "/lien-he" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className="text-xs hidden md:block bg-tertiary-container text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">phone</span>
              0123.456.789
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">email</span>
              aurixuniform@gmail.com
            </div>
          </div>
          <div className="text-white">Thứ 2 - Thứ 7: 08h - 18h</div>
        </div>
      </div>
      <header className="sticky top-0 z-50 shadow-sm bg-primary dark:bg-primary-container">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
          <a href="/" className="text-headline-md font-headline-md font-bold text-white">
            Aurix Uniforms
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-label-caps font-label-caps border-b-2 border-secondary-container text-white pb-1 transition-colors duration-200"
                    : "text-label-caps font-label-caps text-on-primary/80 dark:text-on-primary-fixed/80 hover:text-secondary-container transition-colors duration-200"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex bg-white text-black cursor-pointer font-label-caps px-6 py-2 rounded-3xl scale-95 active:scale-90 transition-transform">
              Nhận báo giá
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition rounded-lg hover:bg-gray-100"
              aria-label="Mở menu"
            >
              <span className="material-symbols-outlined text-white">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white px-4 py-4 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto border-t border-gray-100">
            <div className="flex-1 overflow-y-auto space-y-3">
              {navLinks.map((link) => (
                <div key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-gray-700 font-medium transition hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                  >
                    {link.label}
                  </NavLink>

                  {/* {link.children && (
                  <div className="mt-3 ml-2 space-y-3">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-gray-500"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )} */}
                </div>
              ))}
            </div>

            <div className="px-4 py-4 border-t border-gray-100 relative">
              <button
                onClick={() => {
                  navigate("/qua-tang");
                  setMobileOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-semibold py-3.5 rounded-3xl"
              >
                Nhận Báo Giá
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
