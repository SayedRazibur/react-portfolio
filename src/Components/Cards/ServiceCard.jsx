import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="py-[50px] px-[30px] bg-white shadow-box-shadow ">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h3 className="text-[24px] font-black pt-[26px] pb-4 text-primary_text">
          {title}
        </h3>
        <p>{description}</p>
        <div className="pt-4">
          <FaArrowRightLong className="text-primary_text" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
