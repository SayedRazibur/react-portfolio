import Section from "./Stracture/Section";
import ProgessBar from "./UI/ProgessBar";

const Skills = () => {
  return (
    <div>
      <Section>
        <div className="flex gap-10 items-center justify-evenly flex-wrap">
          <ProgessBar percentage={70} title="Graphic Design" />
          <ProgessBar percentage={85} title="Web Designing" />
          <ProgessBar percentage={60} title="Brand Design" />
          <ProgessBar percentage={40} title="Web Development" />
        </div>
      </Section>
    </div>
  );
};

export default Skills;
// grid gap-5 items-center justify-center m:grid-cols-2 m:justify-center m:items-center md:grid-cols-3 md:justify-between xl:grid-cols-4 xl:justify-between
