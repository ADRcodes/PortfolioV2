import Dropdown from "./Dropdown";
import { Link } from "react-router-dom"; // If you want to use Router for internal links

const Nav = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="fixed flex justify-between items-center w-full px-4 text-white z-20">
      <img className="nav-logo" src="images/PixelProfile2.jpg" alt="Logo" />

      {/* Desktop Nav (hidden on small screens) */}
      <div className="hidden md:flex justify-center items-center h-[48px] gap-4 relative">
        <div className="nav-item relative group inline-block">
          <Link
            to="/blog"
            className="p-2 text-white rounded transition-all duration-300 ease-in-out hover:bg-blue-700"
          >
            Blog
          </Link>
          {/* Tooltip - hidden by default, appears on hover */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded hidden group-hover:block">
            Coming soon
          </div>
        </div>

        {/* Example: If "Contact" is an internal link, use Link; otherwise, keep <a> if it's an anchor */}
        <a
          href="#contact"
          className="nav-item py-1 px-4 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition"
        >
          Contact
        </a>
      </div>

      {/* Mobile Nav (hidden on medium and larger screens) */}
      <div className="md:hidden">
        <Dropdown items={menuItems} />
      </div>
    </div>
  );
};

export default Nav;
