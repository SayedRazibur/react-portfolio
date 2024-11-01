import ProjectCard from "./Cards/ProjectCard";
import Section from "./Stracture/Section";
import SectionTitle from "./UI/SectionTitle";
import { v4 as uuidv4 } from "uuid";
import img_2 from "../assets/blog_2.jpg";
import img_1 from "../assets/blog_1.jpg";
import img_3 from "../assets/blog_3.jpg";

const blogCardData = [
  {
    imgSrc: img_1,
    id: uuidv4(),
    author: "By David William",
    heading: "Quis autem vea eum iure reprehenderit.",
    description:
      "Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.",
  },
  {
    imgSrc: img_2,
    id: uuidv4(),
    author: "By David William",
    heading: "Quis autem vea eum iure reprehenderit.",
    description:
      "Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.",
  },
  {
    imgSrc: img_3,
    id: uuidv4(),
    author: "By David William",
    heading: "Quis autem vea eum iure reprehenderit.",
    description:
      "Dolor repellendus temporibus autem rerum quibusdam officiis debitis nece.",
  },
];

const Blog = () => {
  return (
    <Section>
      <SectionTitle title="Letest Blogs" description="Blog & Articles" />
      <div className="pt-10 pb-[120px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        {blogCardData.map((data) => (
          <ProjectCard
            blog={true}
            key={data.id}
            imgSrc={data.imgSrc}
            author={data.author}
            date="Mar 8, 2022"
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Blog;
