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
    className="xs:w-[200px] w-full p-[1px] rounded-[16px] shadow-card cursor-pointer group"
  >
    <div className="bg-white rounded-[20px] py-5 px-6 min-h-[200px] flex justify-evenly items-center flex-col border border-gray-100 hover:border-accent/40 transition-colors duration-500 shadow-sm relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700"></div>
      
      <img src={icon} alt={title} className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" loading="lazy" />
      <h3 className="text-black-100 text-[15px] font-bold text-center font-serif mt-4">{title}</h3>
      
      <div className="w-10 h-[2px] bg-accent/20 group-hover:w-full group-hover:bg-accent/40 transition-all duration-700"></div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className={`${styles.sectionSubText} font-medium uppercase tracking-[3px] text-accent font-serif`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} font-serif leading-tight text-black-100`}>Overview</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('right', 'tween', 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 text-secondary text-[18px] leading-[36px] font-medium"
          >
            I'm Vicky Nishad, an Electronics and Communication Engineering student and a deeply passionate <strong className="text-black-100">AI Systems Architect</strong>. My work is driven by a fascination with <strong className="text-black-100 underline decoration-accent/30">Large Language Models (LLMs)</strong> and the transformative power of <strong className="text-black-100 underline decoration-accent/30">Autonomous Agents</strong>.
            <br /><br />
            I specialize in designing and implementing <strong className="text-black-100">Agentic Workflows</strong> that bridge the gap between static code and dynamic, self-evolving systems.
          </motion.p>
        </div>

        {/* Premium 3D-like Abstract Element on the Right */}
        <div className="hidden lg:flex flex-1 justify-center relative">
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-72 h-72 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-[60px] blur-[2px] border border-white/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
          {/* Subtle Background Glow for About Section */}
          <div className="absolute inset-0 bg-accent/5 blur-[120px] -z-10 rounded-full" />
        </div>
      </div>

      <div className="mt-10 lg:mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
