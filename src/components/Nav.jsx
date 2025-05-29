import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Nav = ({ menuItems }) => {

  return (
    <div>

      <div className="w-full h-[48px] fixed flex justify-center items-center  bg-teal-700/30 backdrop-blur-md px-4 z-20">
        {/* Desktop Nav (hidden on small screens) */}
        <div className="flex relative w-full max-w-[1216px] justify-between items-center gap-4 px-4">
          <div className="flex items-center gap-2">
            <a href="#">
              <img className="w-[40px] h-[40px] rounded-full" src="images/PixelProfile2.jpg" alt="Logo" />
            </a>
            <span className="text-white">Alex Russell</span>
          </div>

          <div className="hidden md:flex relative items-center gap-2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className={`relative group inline-block ${item.comingSoon ? "cursor-not-allowed" : ""}`}
              >
                <Link
                  to={item.comingSoon ? "#" : item.link}
                  className={`btn-primary text-slate-100 hover:bg-teal-700 hover:text-white ${item.comingSoon ? "cursor-not-allowed" : ""}`}
                  aria-disabled={item.comingSoon}
                >
                  {item.label}
                </Link>
                {item.comingSoon && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-slate-900/50 text-white text-xs rounded hidden group-hover:block">
                    Coming soon
                  </span>
                )}

              </div>
            ))}
            <a
              href="#contact"
              className="btn-primary border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
        {/* Mobile Nav (hidden on medium and larger screens) */}
        <div className="md:hidden flex items-center">
          <Dropdown items={menuItems} />
        </div>
      </div>
      <div className="h-[48px]"></div>
    </div>
  );
};

export default Nav;
