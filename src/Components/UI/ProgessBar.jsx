import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgessBar = ({ percentage, title }) => {
  return (
    <div className="flex gap-6 flex-col justify-center items-center">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={10}
        className="w-[167px]"
        styles={{
          trail: {
            stroke: "#C4C4C4",
          },
          text: {
            fill: "#E5745D",
          },
          path: {
            stroke: "#E5745D",
          },
        }}
      />
      <h3 className="text-lg m:text-xl xl:text-2xl font-semibold text-primary_text">
        {title}
      </h3>
    </div>
  );
};

export default ProgessBar;
