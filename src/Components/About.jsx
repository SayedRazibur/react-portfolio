import about_1 from "../assets/about1.png";
import about_2 from "../assets/about2.png";
import about_3 from "../assets/about3.png";
import Section from "./Stracture/Section";
import Button from "./UI/Button";
import SectionTitle from "./UI/SectionTitle";

const About = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-[1fr_170px] gap-6">
          <div className="w-full">
            <img className="w-full h-full object-cover" src={about_1} alt="" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <img
                className="w-full h-full object-cover"
                src={about_2}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover"
                src={about_3}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="pt-7">
            <SectionTitle
              title="About Me"
              description="I Enjoy Solving Problems With Scalable Solutions"
              maxWidth="max-w-[570px]"
              center={false}
            />
            <div className="font-4 leading-6 text-base text-primary_text pb-[50px]">
              <p className="pt-1 pb-9">
                Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
                aeci velit, sed quia non numquam eius modi tempora incidunt lao
                magnam aliquam quaerat voluptatem reprehenderit.
              </p>
              <p>
                Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
                reprehenderit non numquam eius.
              </p>
            </div>
            <Button TagName="button" btnText="Download CV" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
