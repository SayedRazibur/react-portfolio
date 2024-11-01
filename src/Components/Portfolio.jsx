import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "./Stracture/Section";
import SectionTitle from "./UI/SectionTitle";
import PortfolioCard from "./Cards/PortfolioCard";
import img_1 from "../assets/portfolio1.jpg";
import img_2 from "../assets/portfolio2.jpg";
import PrevNextBtn from "./UI/PrevNextBtn";

const tabMenu = ["All", "Branding", "Fashion", "Photography", "Product"];
const cardData = [
  {
    id: uuidv4(),
    imgSrc: img_1,
    title: "Motion Graphics",
    des: "Website",
    catagory: "Branding",
  },
  {
    id: uuidv4(),
    imgSrc: img_2,
    title: "E-Learning App",
    des: "IOS App",
    catagory: "Branding",
  },
  {
    id: uuidv4(),
    imgSrc: img_1,
    title: "Motion Graphics",
    des: "Website",
    catagory: "Fashion",
  },
  {
    id: uuidv4(),
    imgSrc: img_1,
    title: "Motion Graphics",
    des: "Website",
    catagory: "Photography",
  },
  {
    id: uuidv4(),
    imgSrc: img_2,
    title: "E-Learning App",
    des: "IOS App",
    catagory: "Fashion",
  },
  {
    id: uuidv4(),
    imgSrc: img_2,
    title: "E-Learning App",
    des: "IOS App",
    catagory: "Branding",
  },
  {
    id: uuidv4(),
    imgSrc: img_2,
    title: "E-Learning App",
    des: "IOS App",
    catagory: "Product",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(0);
  const [portfolios, setPortfolios] = useState(cardData);
  const [prevActive, setPrevActive] = useState(0);
  const [nextActive, setNextActive] = useState(4);

  const handlePrev = () => {
    if (prevActive > 0) {
      setPrevActive(prevActive - 4);
      setNextActive(nextActive - 4);
    }
  };
  const handleNext = () => {
    if (nextActive < cardData.length) {
      setPrevActive(prevActive + 4);
      setNextActive(nextActive + 4);
    }
  };
  const handleActive = (i) => {
    setActive(i);

    if (i === 0) {
      setPortfolios(cardData);
    } else {
      setPortfolios(cardData.filter((data) => data.catagory === tabMenu[i]));
    }
  };

  return (
    <Section>
      <SectionTitle title="My Portfolio" description="My Work Example" />
      <div className="pt-6 pb-10">
        <ul className="flex flex-wrap gap-3 md:gap-8 items-center justify-center cursor-pointer">
          {tabMenu.map((menu, i) => (
            <li
              key={menu}
              className={`text-base text-primary_text font-normal leading-normal relative ${
                active === i
                  ? "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-secondary after:content-['']"
                  : ""
              }`}
              onClick={() => handleActive(i)}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolios.slice(prevActive, nextActive).map((data) => (
          <PortfolioCard key={data.id} data={data} />
        ))}
      </div>

      <PrevNextBtn
        onNext={handleNext}
        onPrev={handlePrev}
        cardData={portfolios}
        prevActive={prevActive}
        nextActive={nextActive}
      />
    </Section>
  );
};

export default Portfolio;
