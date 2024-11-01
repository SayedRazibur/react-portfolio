import Section from "./Stracture/Section";
import footer from "../assets/footer.png";
import { useState } from "react";
import img_1 from "../assets/skype.png";
import img_2 from "../assets/insta.png";
import img_3 from "../assets/behance.png";

const footerItems = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Blog",
  "Contact",
];

function Footer() {
  const [activeItem, setAvtiveItem] = useState(0);

  const handleActive = (index) => {
    setAvtiveItem(index);
  };

  const FooterItem = ({ menu, index }) => {
    return (
      <li>
        <a
          onClick={() => handleActive(index)}
          className={`leading-[26px] ${
            index === activeItem ? "text-secondary" : "text-white"
          }`}
          href="javascript:void(0)"
        >
          {menu}
        </a>
      </li>
    );
  };
  return (
    <Section className="bg-primary_text pt-10 md:pt-20">
      <div className="flex justify-center items-center flex-col gap-[50px]">
        <div className="">
          <img className="" src={footer} alt="logo" />
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-5 m:gap-10">
            {footerItems.map((item, index) => {
              return <FooterItem menu={item} key={index} index={index} />;
            })}
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="w-[60px] h-[60px] rounded-full bg-secondary flex justify-center items-center">
            <img
              className="h-[29px] w-[29px] object-cover"
              src={img_1}
              alt="logo"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-full bg-secondary flex justify-center items-center">
            <img
              className="h-[29px] w-[29px] object-cover"
              src={img_2}
              alt="logo"
            />
          </div>
          <div className="w-[60px] h-[60px] rounded-full bg-secondary flex justify-center items-center">
            <img
              className="h-[29px] w-[29px] object-cover"
              src={img_3}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="pt-20 flex flex-col justify-center items-center gap-[30px] w-full">
        <div className="w-full border-b-[1px] border-white/10"></div>
        <div className="pb-[30px]">
          <p className="text-[12px] text-[#FFFFFF] font-normal">
            Copyright &copy; 2023 Design By Estiak. All rights reserved.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
