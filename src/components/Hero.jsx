import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center overflow-hidden bg-[#faf9f6]">
      {/* Interactive Background Layer */}
      <BackgroundCanvas />

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center z-10 w-full pointer-events-none`}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto bg-white/10 backdrop-blur-lg border border-white/20 p-10 md:p-16 rounded-[40px] shadow-2xl text-center max-w-4xl"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className={`${styles.heroHeadText} font-serif tracking-tight text-black-100`}
          >
            Hi, I'm <span className="text-accent italic">Vicky</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className={`${styles.heroSubText} mt-6 text-secondary font-medium`}
          >
            I develop <br className="sm:block hidden" />
            <span className="font-semibold text-black-100 inline-block min-w-[200px]">
              <TypewriterEffect texts={["Full Stack Applications", "Autonomous LLM Agents", "Agentic Systems Architect", "Intelligent Systems Explorer"]} />
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 md:bottom-10 w-full flex justify-center items-center z-10">
        <a
          href="#about"
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault();
            if (window.lenis) {
              window.lenis.scrollTo('#about', { offset: -50, duration: 1.5 });
            } else {
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-accent hover:text-secondary transition-colors cursor-pointer"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 120;
    const connectionDistance = 160;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 180) {
            this.x -= dx * 0.015;
            this.y -= dy * 0.015;
          }
        }
      }

      draw() {
        ctx.fillStyle = 'rgba(217, 119, 87, 0.5)'; // Accent color
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(217, 119, 87, ${(1 - distance / connectionDistance) * 0.6})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-[#faf9f6]"
    />
  );
};

const TypewriterEffect = ({ texts }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
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
