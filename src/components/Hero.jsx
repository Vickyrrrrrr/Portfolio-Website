import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] mx-auto flex flex-col justify-center">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}>
        <div className="pointer-events-auto mt-[-100px]">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${styles.heroHeadText} font-serif tracking-tight`}
          >
            Hi, I'm <span className="text-accent italic">Vicky</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className={`${styles.heroSubText} mt-4 max-w-2xl text-secondary`}
          >
            I develop <br className="sm:block hidden" />
            <span className="font-semibold text-black-100 inline-block sm:min-w-[400px] min-w-[200px]">
              <TypewriterEffect texts={["Full Stack Applications", "High-Performance Systems", "Agentic AI / AgentIC Solutions", "Interactive Web Experiences"]} />
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 hover:border-accent transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

const TypewriterEffect = ({ texts }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  // Typewriter logic
  React.useEffect(() => {
    if (index === texts.length) {
      setIndex(0); // Loop back
      return;
    }

    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === texts[index].length ? 1500 : 80, parseInt(Math.random() * 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  // Blinking cursor
  React.useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <span className="font-semibold text-black-100">
      {texts[index % texts.length].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100 text-accent font-light" : "opacity-0"} ml-1`}>|</span>
    </span>
  );
};

export default Hero;
