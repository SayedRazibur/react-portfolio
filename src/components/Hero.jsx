import heroImage from "../assets/heroImg.png";
import shapeImage from "../assets/shape.png";

const Hero = () => {
  return (
    <section
      className=" w-full md:h-[90vh] bg-[#00413d] py-14"
      style={{ backgroundImage: `url(${shapeImage})` }}
    >
      <div className="container">
        <div className="block sm:flex justify-between items-center h-full space-y-10 sm:space-y-0">
          {/* Left Side */}
          <div className="w-[58%] relative">
            <h1 className="text-4xl sm:text-7xl lg:text-[100px] whitespace-nowrap text-white">
              <span className="block">Hello!</span> I’m Zarror Nibors
            </h1>
            <p className=" text-base sm:text-[1.8rem] sm:leading-normal pb-[50px] text-white">
              I’m a freelance <b>UI/UX Designer</b> based in Indonesia who loves
              to craft attractive design experiences for the web.
            </p>
            <a href="#services" className="btn">
              Learn More
            </a>
          </div>

          {/* Right Side */}
          <div className="sm:w-[42%]">
            <img
              src={heroImage}
              alt="Hero"
              className="sm:max-w-none  sm:h-[90vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
