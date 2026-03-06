import { motion } from 'framer-motion';
import React from 'react';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full bg-white border border-gray-200 p-[1px] rounded-[12px] shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="bg-white rounded-[12px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain filter invert opacity-80" loading="lazy" />
        <h3 className="text-black-100 text-[18px] font-semibold text-center font-serif">{title}</h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] font-sans"
      >
        I'm Vicky Nishad, a driven First-Year Electronics and Communication (EC) Engineering student
        deeply passionate about the intersection of hardware and advanced software systems.
        I specialize in **Agentic AI** systems and large language models (LLMs), including the development of platforms like **AgentIC** where autonomous agents execute complex workflows.
        Alongside building scalable Full-Stack applications, I am exploring core engineering concepts in Verilog and MATLAB.
        My goal is to leverage advanced AI algorithms and solid engineering principles to create high-impact, research-driven solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
