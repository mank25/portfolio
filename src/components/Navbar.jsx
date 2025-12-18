import React, { useState, useEffect } from "react";
import siteData from "../pages/siteData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { navigation } = siteData;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false); // lg breakpoint
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between py-3 px-5 lg:px-[20%]">
        
        {/* Logo */}
        <div className="font-extrabold text-xl text-gray-800 select-none">
          Mayank Sharma
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-10 text-gray-600 font-semibold">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative group transition-all duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg animate-slideDown">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-semibold">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b border-gray-200 last:border-none"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
