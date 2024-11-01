import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const PrevNextBtn = ({ onNext, onPrev, cardData, prevActive, nextActive }) => {
  return (
    <div className="pt-4 pb-2 flex justify-between">
      <button
        onClick={onPrev}
        className={`${
          prevActive === 0 && "opacity-0 invisible"
        } bg-[#F9F4F1] hover:bg-secondary hover:text-white outline outline-1 outline-primary_text/[0.2] shadow-md py-3 px-4 rounded-sm cursor-pointer`}
      >
        <FaArrowLeftLong className="text-3xl " />
      </button>

      <button
        onClick={onNext}
        className={`${
          // eslint-disable-next-line react/prop-types
          cardData.length <= nextActive && "hidden"
        } bg-[#F9F4F1] hover:bg-secondary hover:text-white outline outline-1 outline-primary_text/[0.15] shadow-md py-3 px-4 rounded-sm cursor-pointer`}
      >
        <FaArrowRightLong className="text-3xl " />
      </button>
    </div>
  );
};

export default PrevNextBtn;
