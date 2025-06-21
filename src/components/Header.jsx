import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { headerData } from "../data/data";
import { MdOutlineDehaze, MdClose } from "react-icons/md";
import logo from "/logo1.png";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleToggleHeader = () => setIsActive((prev) => !prev);
  const handleCloseHeader = () => setIsActive(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    `transition hover:text-primary ${isActive ? "text-primary font-semibold" : "text-white"
    }`;

  return (
    <>
      {/* Overlay Blur */}
      {isActive && (
        <div
          onClick={handleCloseHeader}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <header
        className={`h-[55px] sm:h-[60px] text-white border-b w-full fixed z-50 flex items-center transition-all duration-300 ${isScrolled || isActive
          ? "bg-[#000000]/75 backdrop-blur-xl shadow-xl"
          : "bg-black/15 backdrop-blur-3xl"
          }`}
      >
        <div className="container relative mx-auto px-[20px] flex items-center justify-between w-full">
          {/* Logo */}
          <Link to={"/"}>
            <img src={logo} alt="new capital logo" className="h-[30px] sm:h-[40px]" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-11 font-poppins text-[17.5px] font-[500]">
            {headerData.map((l) => (
              <li key={l.id}>
                <NavLink to={l.to} className={getLinkClass}>
                  {l.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden block" onClick={handleToggleHeader}>
            {isActive ? (
              <MdClose className="text-[27px] cursor-pointer" />
            ) : (
              <MdOutlineDehaze className="text-[27px] cursor-pointer" />
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <ul
          className={`fixed top-[55px] sm:top-[60px] right-0 w-[75%] max-w-[300px] h-[calc(100vh-60px)] bg-[#000000]/90 backdrop-blur-xl border-l border-white/20 text-white font-poppins text-[16px] z-50 p-6 flex flex-col gap-6 transition ease-out duration-500 ${isActive ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {headerData.map((l) => (
            <li key={l.id}>
              <NavLink to={l.to} onClick={handleCloseHeader} className={getLinkClass}>
                {l.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}

export default Header;
