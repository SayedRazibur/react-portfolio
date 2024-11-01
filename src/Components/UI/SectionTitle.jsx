const SectionTitle = ({
  center = true,
  title,
  description,
  maxWidth,
  className = "",
}) => {
  return (
    <div className={`${center && "text-center"} ${className}`}>
      <h4 className="pb-2 ml-[52px] text-lg md:text-xl text-secondary inline-block relative after_before">
        {title}
      </h4>
      <h2
        className={`text-2xl leading-tight md:text-3xl xl:text-4xl font-medium text-primary_text ${
          center ? "mx-auto" : undefined
        } ${maxWidth}`}
      >
        {description}
      </h2>
    </div>
  );
};

export default SectionTitle;
