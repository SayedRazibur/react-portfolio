import Section from "./Stracture/Section";
import SectionTitle from "./UI/SectionTitle";
import quotes from "../assets/quotes.svg";
import img_1 from "../assets/man-1.jpg";
import TestimonialCard from "./Cards/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testomonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Section className="bg-[#F9F4F1] h-[688px]">
      <SectionTitle
        className="pb-10"
        title="Testomonial"
        description="Feedback From Client"
      />

      {/* <div className="grid grid-cols-2 gap-6 pb-[170px]"> */}
      <Slider {...settings}>
        <div className="px-3">
          <TestimonialCard
            imgSrc={img_1}
            icon={quotes}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and thistypesetting industry.."
            name="John Doe"
            role="Web Developer"
          />
        </div>
        <div className="px-3">
          <TestimonialCard
            imgSrc={img_1}
            icon={quotes}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and thistypesetting industry.."
            name="John Doe"
            role="Web Developer"
          />
        </div>
        <div className="px-3">
          <TestimonialCard
            imgSrc={img_1}
            icon={quotes}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and thistypesetting industry.."
            name="John Doe"
            role="Web Developer"
          />
        </div>
      </Slider>
      <div className="pb-40px "></div>
    </Section>
  );
};

export default Testomonial;
