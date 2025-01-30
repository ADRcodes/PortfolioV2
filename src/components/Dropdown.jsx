import React, { useState } from "react";

export default function Dropdown({ items = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      {/* Hamburger/X Button */}
      <button
        className="flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {/* Top line */}
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 
            ${menuOpen ? "rotate-45 translate-y-[2px]" : "mb-1"}`}
        />
        {/* Middle line */}
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300
            ${menuOpen ? "opacity-0" : "mb-1"}`}
        />
        {/* Bottom line */}
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300
            ${menuOpen ? "-rotate-45 -translate-y-[2px]" : ""}`}
        />
      </button>

      {/* Drop-down Menu */}
      <div
        className={`absolute right-0 mt-2 rounded-md bg-slate-600 shadow-md 
          transition-all duration-300 ease-in-out 
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <ul className="py-2 px-0 m-0">
          {items.map(({ label, link }, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
            >
              {/* 
                If you want a clickable link, you can use an <a> tag for external links 
                OR a <Link> (from React Router) for internal navigation. 
              */}
              <a href={link} className="text-white block">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
