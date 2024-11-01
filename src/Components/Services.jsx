import ServiceCard from "./Cards/ServiceCard";
import SectionTitle from "./UI/SectionTitle";
import icon_1 from "../assets/icon1.png";
import icon_2 from "../assets/icon2.png";
import icon_3 from "../assets/icon3.png";
import Section from "./Stracture/Section";
const serviceData = [
  {
    id: 1,
    title: "Ui/Ux Design",
    icon: icon_1,
    description:
      "Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum naaibus minima veniam.",
  },
  {
    id: 1,
    title: "Mobile App Design",
    icon: icon_2,
    description:
      "Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum naaibus minima veniam.",
  },
  {
    id: 1,
    title: "Web Design",
    icon: icon_3,
    description:
      "Dolor repellendus tempo ribus auequibusdam offi ciis debitis rerum naaibus minima veniam.",
  },
];

const Services = () => {
  return (
    <Section>
      <SectionTitle
        title="MY SERVICES"
        description="Provide Wide Range of Digital Services"
        maxWidth="max-w-[517px]"
      />
      <div className="w-[370px] m:w-auto grid grid-cols-1 m:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
        {serviceData.map((data) => (
          <ServiceCard
            key={data.id}
            title={data.title}
            description={data.description}
            icon={data.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
