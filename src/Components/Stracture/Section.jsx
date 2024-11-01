import Container from "./Container";

const Section = ({ children, className = "" }) => {
  return (
    <div className={`pt-20 md:pt-[120px] ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default Section;
