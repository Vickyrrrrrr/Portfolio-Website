import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35, delay: index * 0.04 }}
    whileHover={{ y: -4, scale: 1.05 }}
    className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] flex flex-col items-center justify-center rounded-2xl bg-tertiary shadow-sm hover:shadow-lg transition-all duration-300 border border-white/5"
    title={name}
  >
    <img src={icon} alt={name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-md" loading="lazy" />
    <span className="mt-2 text-center text-[10px] sm:text-[11px] font-medium text-secondary">{name}</span>
  </motion.div>
);

const Tech = () => (
  <div className="flex flex-col items-center max-w-5xl mx-auto py-6">
    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-5">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} {...tech} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Tech, "tech");
