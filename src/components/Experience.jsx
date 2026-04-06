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
      background: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(12px)",
      color: "#1a1a1a",
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "24px",
      padding: "2rem",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
    date={experience.date}
    dateClassName="text-secondary font-bold text-[16px] px-4"
    iconStyle={{ 
      background: experience.iconBg, 
      boxShadow: "0 0 0 4px #faf9f6, inset 0 2px 4px rgba(0,0,0,0.05)" 
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.icon === "dot" ? (
          <div className="w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/40 animate-pulse"></div>
        ) : (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[65%] h-[65%] object-contain drop-shadow-md"
            loading="lazy"
          />
        )}
      </div>
    }
  >
    <div className="relative overflow-hidden">
      <h3 className="text-black-100 text-[26px] font-bold font-serif tracking-tight">{experience.title}</h3>
      <p className="text-accent text-[16px] font-bold uppercase tracking-widest mt-1" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-6 list-disc ml-5 space-y-3">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-secondary text-[15px] pl-1 leading-relaxed font-medium"
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
