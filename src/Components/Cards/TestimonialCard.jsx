import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg relative shape testimonial_shadow border-t-[7px] border-secondary ">
        <p className=" text-primary_text">{props.description}</p>
      </div>
      <div className="pl-[69px] flex items-center gap-[30px] pt-[38px]">
        <div className=" relative w-[74px] h-[74px] rounded-full border-[5px] border-white outline outline-offset-[1px] outline-secondary">
          <img
            className="h-full w-full object-cover rounded-full"
            src={props.imgSrc}
            alt="Client"
          />
          <span className="w-[29px] h-[29px] px-[6px] py-[5px] bg-secondary rounded-full flex justify-center items-center absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
            <img
              className="w-full h-full object-cover"
              src={props.icon}
              alt="icon"
            />
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary_text">
            {props.name}
          </h3>
          <p className="text-base text-primary_text font-normal">
            {props.role}
          </p>
          <div className="flex gap-1 items-center">
            <FaStar className="text-[#FF9F3F] text-sm" />
            <FaStar className="text-[#FF9F3F] text-sm" />
            <FaStar className="text-[#FF9F3F] text-sm" />
            <FaStar className="text-[#FF9F3F] text-sm" />
            <FaStarHalfAlt className="text-[#FF9F3F] text-sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
