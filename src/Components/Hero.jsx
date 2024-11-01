import hero from "../assets/hero.png";
import Button from "./UI/Button";
function Hero() {
  return (
    <section className="bg-[#00413D] relative">
      <div className="flex">
        <div className="container py-20 md:pt-[194px] md:pb-[248px] relative z-10">
          <h1 className="text-white text-[50px] md:text-[70px] xl:text-[80px] 2xl:text-[100px] font-bold leading-[1.1] max-w-[834px]">
            <span className="block">Hello!</span> I’m Zarror Nibors
          </h1>
          <p className="max-w-[670px] pt-10 pb-[50px] text-white/50 text-xl font-normal leading-[30px]">
            I’am freelance{" "}
            <a href="/" className="text-white cursor-text">
              UI/UX Desogner
            </a>{" "}
            based in Indonesia who loves to craft attractive design experiences
            for the web.
          </p>
          <Button TagName={"button"} type="button" btnText="Contact Me" />
          <div className="md:hidden mt-10 md:mt-0">
            <img className="w-full h-full object-cover" src={hero} alt="Hero" />
          </div>
        </div>
        <div className="hidden md:block w-[44%] h-full absolute right-0 bottom-0 -z-[1px]">
          <img className="w-full h-full object-cover" src={hero} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
