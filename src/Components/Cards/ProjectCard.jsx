import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({
  imgSrc,
  title,
  heading,
  description,
  blog = false,
  date,
  author,
}) => {
  return (
    <div className="shadow-md">
      <div className=" md:max-w-80 xl:max-w-[370px] h-[260px]">
        <img className="w-full h-full object-cover" src={imgSrc} alt="" />
      </div>
      <div className="px-8 pt-[20px]">
        {blog ? (
          <div className="flex justify-between">
            <h4 className="pb-[10px] text-[16px] text-secondary font-medium">
              {author}
            </h4>
            <span className="text-primary_text text-sm">{date}</span>
          </div>
        ) : (
          <h4 className="pb-[10px] text-[16px] text-secondary font-medium">
            {title}
          </h4>
        )}

        <h2 className="text-2xl text-primary_text font-medium">{heading}</h2>
        <p className="pt-[10px] pb-6 text-[16px] leading-6 opacity-70">
          {description}
        </p>
        {blog ? (
          <p className="pb-[30px] flex items-center gap-1 text-[18px] font-medium cursor-pointer hover:text-secondary">
            Read More <FaArrowRight />
          </p>
        ) : (
          <p className="flex items-center gap-1 text-[18px] font-medium cursor-pointer hover:text-secondary">
            View Case Studies <FaArrowRight />
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
