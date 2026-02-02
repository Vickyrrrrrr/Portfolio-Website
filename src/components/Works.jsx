import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-white/20 hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="bg-black/50 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:bg-black/80 transition-all"
                title="Live Demo"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/50 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:bg-black/80 transition-all"
              title="Source Code"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] tracking-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] font-medium opacity-80 ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories and live demos.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
