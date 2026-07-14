import { NavLink, useNavigate } from "react-router-dom";
import NavLogo from "../assets/nav_logo.webp";
import { useState } from "react";

const navLinks = [
  { label: "Trang chủ", to: "/" },
  { label: "Khăn Lạnh", to: "/khan-lanh" },
  { label: "Sản Xuất", to: "/san-xuat-khan-lanh" },
  { label: "Về Chúng Tôi", to: "/cong-ty-khan-lanh" },
  { label: "Blog", to: "/blog" },
  { label: "Liên Hệ", to: "/lien-he" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className="text-xs hidden md:block bg-[#4D835F] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">phone</span>
              0123.456.789
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">email</span>
              vuakhanlanh@gmail.com
            </div>
          </div>
          <div className="text-white">Thứ 2 - Thứ 7: 08h - 18h</div>
        </div>
      </div>
      <header className="sticky top-0 z-50 shadow-sm bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-2">
            <img
              src={NavLogo}
              alt="Vua Khăn Lạnh Logo"
              className="h-12 w-auto object-contain invert mix-blend-multiply"
            />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface dark:text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex font-semibold text-xs transition-all bg-[#4D835F] text-white px-5 py-2.5 rounded-3xl hover:shadow-lg hover:shadow-[#4D835F]/25">
              Nhận báo giá
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition rounded-lg hover:bg-gray-100"
              aria-label="Mở menu"
            >
              <span className="material-symbols-outlined">
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
                className="w-full flex items-center justify-center gap-2 bg-[#4D835F] text-white font-semibold py-3.5 rounded-3xl"
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
