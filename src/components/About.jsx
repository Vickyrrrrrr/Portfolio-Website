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
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[32px] font-sans"
      >
        I'm Vicky Nishad, an Electronics and Communication Engineering student and a deeply passionate <strong>AI Community Builder</strong>.
        I firmly believe in Anthropic's mission to develop <strong>Helpful, Honest, and Harmless (HHH) AI</strong>, which is the guiding philosophy behind my work.
        <br /><br />
        I specialize in utilizing the <strong>Claude API</strong> and advanced Agentic AI systems to build robust tools. Most notably, I developed <strong>AgentIC</strong>—an automated, tapeout-ready VLSI logic ecosystem built entirely with Claude 3.5 Sonnet.
        <br /><br />
        Beyond engineering scalable full-stack applications and exploring hardware design, my ultimate goal is to lead student-driven AI initiatives on campus, organize technical workshops, and empower fellow builders to integrate state-of-the-art AI responsibly.
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
