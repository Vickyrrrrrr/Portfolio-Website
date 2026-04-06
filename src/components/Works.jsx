import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring")}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: -5,
        perspective: 1000
      }}
      className="bg-white/40 backdrop-blur-md p-5 rounded-[24px] sm:w-[360px] w-full border border-white/20 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-[18px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
        
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {live_demo_link && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); window.open(live_demo_link, "_blank"); }}
              className="bg-white/95 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white hover:bg-accent hover:text-white transition-all shadow-lg"
              title="Live Demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.div>
          )}
          {source_code_link !== "#" && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
              className="bg-white/95 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white hover:bg-black hover:text-white transition-all shadow-lg text-black"
              title="Source Code"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain filter invert group-hover:invert-0 transition-all" />
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-black-100 font-bold text-[22px] font-serif tracking-tight group-hover:text-accent transition-colors duration-300">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} className={`px-2 py-1 rounded-md bg-accent/5 text-[11px] font-bold uppercase tracking-wider text-accent border border-accent/10`}>
            #{tag.name}
          </span>
        ))}
      </div>
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
