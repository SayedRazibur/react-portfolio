import ProjectCard from "./Cards/ProjectCard";
import Section from "./Stracture/Section";
import SectionTitle from "./UI/SectionTitle";
import Button from "./UI/Button";
import img_1 from "../assets/project1.jpg";
import img_2 from "../assets/project2.jpg";
import img_3 from "../assets/project3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <GoArrowRight className=" outline outline-1 outline-primary_text/[0.1] hover:bg-secondary hover:text-white text-primary_text text-3xl md:text-4xl absolute right-0 top-[-76px] z-10" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="" onClick={onClick}>
      <GoArrowLeft className=" outline outline-1 outline-primary_text/[0.1] hover:bg-secondary hover:text-white text-primary_text text-3xl md:text-4xl absolute right-[50px] top-[-76px] z-10" />
    </div>
  );
}

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Section>
        <div className="w-full flex justify-between pb-10">
          <SectionTitle
            title="Recent Projects"
            description="My Recent Projects"
            center={false}
          />
        </div>

        <Slider {...settings}>
          <div className="px-3">
            <ProjectCard
              imgSrc={img_1}
              title="Analytics, UI-Ux"
              heading=" Branding & Digital Video Campaign For George’s Cafe"
              description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry."
            />
          </div>
          <div className="px-3">
            <ProjectCard
              imgSrc={img_2}
              title="Mobile App"
              heading=" Branding & Digital Video Campaign For George’s Cafe"
              description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry."
            />
          </div>
          <div className="px-3">
            <ProjectCard
              imgSrc={img_3}
              title="Web Development"
              heading="Branding & Digital Video Campaign For George’s Cafe "
              description="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry."
            />
          </div>
        </Slider>
        <div className="pt-[86px] text-center w-full">
          <Button TagName="a" href="#" btnText="Explore More" />
        </div>
      </Section>
    </>
  );
};

export default Projects;
