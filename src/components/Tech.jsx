import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.1, rotateZ: [0, -5, 5, 0] }}
    className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center p-4 bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform" 
    key={name} 
    title={name}
  >
    <motion.div
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2
      }}
    >
      <img src={icon} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-md" loading="lazy" />
    </motion.div>
    <span className="mt-3 text-[11px] sm:text-[12px] font-bold text-black-100/70 uppercase tracking-tighter">{name}</span>
  </motion.div>
);

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl mx-auto py-10">
    {technologies.map((tech, index) => (
      <TechCard key={tech.name} index={index} {...tech} />
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
