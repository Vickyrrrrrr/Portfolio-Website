import { motion } from 'framer-motion';
import React from 'react';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    whileHover={{ 
      scale: 1.05, 
      rotateY: 10, 
      rotateX: -10,
      perspective: 1000 
    }}
    whileTap={{ scale: 0.95 }}
    className="xs:w-[250px] w-full p-[1px] rounded-[20px] shadow-card cursor-pointer group"
  >
    <div className="bg-white rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly items-center flex-col border border-gray-100 hover:border-accent/40 transition-colors duration-500 shadow-sm relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700"></div>
      
      <img src={icon} alt={title} className="w-16 h-16 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      <h3 className="text-black-100 text-[20px] font-bold text-center font-serif mt-4">{title}</h3>
      
      <div className="w-10 h-[2px] bg-accent/20 group-hover:w-full group-hover:bg-accent/40 transition-all duration-700"></div>
    </div>
  </motion.div>
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
        I'm Vicky Nishad, an Electronics and Communication Engineering student and a deeply passionate <strong>AI Systems Architect</strong>. My work is driven by a fascination with <strong>Large Language Models (LLMs)</strong> and the transformative power of <strong>Autonomous Agents</strong>.
        <br /><br />
        I specialize in designing and implementing <strong>Agentic Workflows</strong> that bridge the gap between static code and dynamic, self-evolving systems. Most notably, I developed <strong>AgentIC</strong>—an automated, tapeout-ready VLSI logic ecosystem powered by advanced LLM orchestration.
        <br /><br />
        As a lifelong learner, my goal is to lead student-driven AI initiatives, organize technical workshops, and empower fellow builders to integrate state-of-the-art AI into every facet of engineering. I am committed to building intelligent tools that learn, adapt, and solve complex problems responsibly.
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
