import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary p-4 rounded-2xl sm:w-[320px] w-full border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group"
    >
      <div className="relative w-full h-[160px] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {live_demo_link && (
            <div
              onClick={() => window.open(live_demo_link, "_blank")}
              className="bg-black/70 backdrop-blur-sm w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/20 transition-all"
              title="Live Demo"
            >
              <span className="text-xs">🔗</span>
            </div>
          )}
          {source_code_link !== "#" && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/70 backdrop-blur-sm w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/20 transition-all"
              title="Source Code"
            >
              <img src={github} alt="github" className="w-4 h-4 object-contain" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-white font-bold text-[18px] tracking-tight">{name}</h3>
        <p className="mt-2 text-secondary text-[13px] leading-[20px] line-clamp-3">{description}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} className={`text-[11px] px-2 py-0.5 rounded-md bg-white/5 ${tag.color}`}>
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
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] max-w-3xl leading-[24px]"
        >
          The following projects showcase my skills and experience through
          real-world examples. Each project is concisely described with
          links to code repositories and live demos, reflecting my ability to
          build scalable, complex systems.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
