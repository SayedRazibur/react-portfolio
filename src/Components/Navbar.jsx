import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import Button from "./UI/Button";

const menuItems = ["Home", "Pages", "Services", "Blog", "Contact"];

const Navbar = () => {
  const [activeItem, setAvtiveItem] = useState(0);
  const [menu, setMenu] = useState(true);

  const handleActive = (index) => {
    setAvtiveItem(index);
  };

  const MenuItem = ({ menu, index }) => {
    return (
      <li>
        <a
          onClick={() => handleActive(index)}
          className={`leading-[26px] ${
            index === activeItem ? "text-secondary" : "text-primary_text"
          }`}
          href="javascript:void(0)"
        >
          {menu}
        </a>
      </li>
    );
  };
  return (
    <nav className="py-[18px] bg-slate-300">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <ul
              className={`z-[1000] flex flex-col w-screen items-center gap-3 absolute p-5 right-0 top-[76px] text-base uppercase bg-red-200 transition-all ${
                menu ? "-left-[100%]" : "left-[0]"
              } md:hidden`}
            >
              {menuItems.map((item, index) => {
                return <MenuItem menu={item} key={index} index={index} />;
              })}
              <Button
                className="py-2 px-6"
                TagName="button"
                type="button"
                btnText=" Download CV"
              />
            </ul>
            <ul className="md:flex items-center gap-6 text-base uppercase hidden">
              {menuItems.map((item, index) => {
                return <MenuItem menu={item} key={index} index={index} />;
              })}
            </ul>
          </div>
          <div>
            <Button
              TagName={"button"}
              btnText="Download CV"
              className="hidden md:flex"
            />
            {/* <button className="btn hidden md:flex"></button> */}
            <button className="md:hidden" onClick={() => setMenu(!menu)}>
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
