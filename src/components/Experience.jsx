import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#ffffff",
      color: "#1a1a1a",
      boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      border: "1px solid #e5e5e5",
      borderRadius: "12px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #e5e5e5" }}
    date={experience.date}
    dateClassName="text-secondary font-medium"
    iconStyle={{ background: experience.iconBg, boxShadow: "0 0 0 4px #faf9f6" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon === "dot" ? (
          <div className="w-3 h-3 rounded-full bg-black-200"></div>
        ) : experience.icon === "lucknow" ? (
          <span className="text-black-100 font-bold font-serif text-[12px]">LU</span>
        ) : (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        )}
      </div>
    }
  >
    <div>
      <h3 className="text-black-100 text-[24px] font-bold font-serif">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-black-200 text-[14px] pl-1 tracking-wide"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="#e5e5e5">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
