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
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="bg-white p-5 rounded-[12px] sm:w-[360px] w-full border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-colors cursor-pointer"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-[12px] opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {live_demo_link && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); window.open(live_demo_link, "_blank"); }}
                className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-gray-200 hover:bg-white transition-all shadow-sm"
                title="Live Demo"
              >
                <svg className="w-5 h-5 text-black-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            )}
            {source_code_link !== "#" ? (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-gray-200 hover:bg-white transition-all shadow-sm"
                title="Source Code"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain filter invert opacity-80" />
              </motion.div>
            ) : (
              <div
                className="bg-gray-100/90 backdrop-blur-sm w-auto px-3 h-10 rounded-full flex justify-center items-center border border-gray-200 shadow-sm cursor-not-allowed"
                title="Private Repository | IP Protected"
              >
                <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                  Private
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-black-100 font-bold text-[20px] font-serif tracking-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] font-medium opacity-80 text-secondary`}>
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

export default SectionWrapper(Works, "work");
