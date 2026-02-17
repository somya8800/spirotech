import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // ✅ Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
     { name: "Education", path: "/education" }, // ⭐ NEW TAB
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ================= LOGO + BRAND ================= */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="WhatsApp Image 2026-02-15 at 2.03.50 PM.jpeg"
            alt="Spirotech Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <h1 className="text-xl font-bold text-green-700 tracking-wide">
            SPIROTECH
          </h1>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition duration-200 ${
                location.pathname === link.path
                  ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow space-y-3">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 ${
                location.pathname === link.path
                  ? "text-green-600 font-semibold"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
