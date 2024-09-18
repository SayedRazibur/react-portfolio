import { useState } from "react";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Pages", "Services", "Blog", "Contact"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="py-[18px] relative">
      <div className="container flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8" />

        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`text-lg leading-[26px] ${
                  activeLink === link ? "text-terraCotta" : "text-richBlack"
                } hover:text-terraCotta transition-colors`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            className="space-y-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`w-8 h-0.5 bg-terraCotta transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-terraCotta transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-0.5 bg-terraCotta transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></div>
          </button>
        </div>

        <button className="hidden md:block btn">Download CV</button>
      </div>

      <div
        className={`absolute z-50 right-0 left-0 md:hidden transition-all duration-300 ease-in-out bg-white shadow-lg rounded-lg p-4 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li
              key={link}
              style={{
                transitionDelay: `${menuOpen ? index * 100 : 0}ms`, // Apply delay in milliseconds
              }}
              className={`transition-all transform duration-300 ease-out ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`block text-center py-2 text-lg font-medium ${
                  activeLink === link ? "text-terraCotta" : "text-richBlack"
                } hover:text-terraCotta transition-colors`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
