import Section from "./Stracture/Section";
import SectionTitle from "./UI/SectionTitle";
import img_1 from "../assets/about1.png";
import Button from "./UI/Button";

const Contact = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] xl:grid-cols-[380px_1fr] 2xl:grid-cols-[470px_1fr] gap-4 md:gap-[30px]">
        <div className="w-full">
          <img className="w-full h-full object-cover" src={img_1} alt="" />
        </div>
        <div className="py-[53px]">
          <SectionTitle
            title="Get In Touch"
            description="Feel Free to Contact"
            center={false}
          />
          <div className="pt-10">
            <div className="flex flex-col gap-[53px] pb-[53px]">
              <form
                className="grid grid-cols-1 m:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-[30px] md:gap-[60px]"
                action=""
              >
                <input
                  className=" w-[350px] m:w-[250px] md:w-[300px] h-10 form_input out_line"
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  className="w-[350px] m:w-[250px] md:w-[300px] h-10 form_input out_line"
                  type="email"
                  placeholder="Enter Email"
                />
                <input
                  className="w-[350px] m:w-[250px] md:w-[300px] h-10 form_input out_line"
                  type="number"
                  placeholder="Phone"
                />
                <input
                  className="w-[350px] m:w-[250px] md:w-[300px] h-10  form_input out_line"
                  type="text"
                  placeholder="Subject"
                />
              </form>
              <form className="" action="">
                <input
                  className="h-10 w-full form_input out_line"
                  type="text"
                  placeholder="Description"
                />
              </form>
            </div>
            <Button TagName="button" type="button" btnText="Contact Us" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
