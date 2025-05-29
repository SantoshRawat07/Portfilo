import React from "react";
import SectionBlock from '../Section/Process';
import one from '../../Image/one.webp';
import two from '../../Image/two.webp';
import three from '../../Image/three.webp';
import four from '../../Image/four.webp';

const sections = [
  {
    number: "01",
    tag: "Discovery",
    title: "Understanding Your Unique Needs.",
    description:
      "In the discovery phase, we immerse ourselves in your brand’s vision, goals, and target audience. Through collaborative discussions and research, we gather insights that inform our strategy.This foundational step ensures that our design solutions align perfectly with your objectives and resonate deeply with your",
    image: one,
  },
  {
    number: "02",
    tag: "Strategy",
    title: "Crafting Innovative Solutions.",
    description:
      "During the design phase, our team translates insights into visually captivating and functional designs. We create wireframes, prototypes, and mockups, allowing you to visualize the project.is iterative process encourages collaboration and feedback, ensuring the final design reflects your brand identity while",
    image: two,
  },
  {
    number: "03",
    tag: "Development",
    title: "Bringing Ideas to Life.",
    description:
      "In the development stage, we transform approved designs into fully functional websites or applications. Our skilled developers utilize the latest technologies to ensure optimal performance, responsiveness, and security.We conduct thorough testing throughout this phase, addressing any issues to deliver a polished final product that exceeds expectations.",
    image: three,
  },
  {
    number: "04",
    tag: "Launch and Support",
    title: "Seamless Deployment and Beyond.",
    description:
      "After final reviews and testing, we launch your project with precision and care. Our team ensures a smooth transition while providing success and alignment with your brand's goals.",
    image: four,
  },
];

const ReusablePage = () => {
  return (
    <div className="flex flex-col space-y-20">
      {sections.map((section, idx) => (
        <SectionBlock
          key={idx}
          number={section.number}
          tag={section.tag}
          title={section.title}
          description={section.description}
          image={section.image}
        />
      ))}
    </div>
  );
};

export default ReusablePage;
