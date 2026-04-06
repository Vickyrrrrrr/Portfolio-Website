import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { 
  FaXTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope 
} from "react-icons/fa6";

const SocialLink = ({ icon: Icon, label, link, color }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ x: 10, scale: 1.02 }}
    className="group flex items-center gap-6 p-5 rounded-3xl bg-white/50 backdrop-blur-md border border-white/40 hover:bg-white/90 transition-all duration-500 shadow-sm hover:shadow-xl"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-white shadow-inner ${color} transition-all duration-500`}>
      <Icon />
    </div>
    <div className="flex flex-col">
      <span className="text-secondary text-xs font-bold uppercase tracking-widest opacity-60">Connect on</span>
      <span className="text-black-100 text-lg font-bold font-serif">{label}</span>
    </div>
    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 pr-2">
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </motion.a>
);

const Contact = () => {
  const socials = [
    {
      icon: FaXTwitter,
      label: "Twitter / X",
      link: "https://x.com/Vicky_nishad_",
      color: "text-black",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      link: "https://linkedin.com/in/vickynishad",
      color: "text-blue-600",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://instagram.com/vicky_nishad_",
      color: "text-pink-600",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      link: "mailto:vickycool389@gmail.com",
      color: "text-red-500",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Abstract Animated Orb in Background */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-2xl bg-white/40 backdrop-blur-3xl border border-white/40 p-8 md:p-16 rounded-[48px] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] relative z-10"
      >
        <p className={`${styles.sectionSubText} text-center font-bold uppercase tracking-[4px] text-accent font-serif`}>Contact</p>
        <h3 className={`${styles.sectionHeadText} text-center font-serif text-black-100 mb-10`}>Let's Connect</h3>

        <div className="flex flex-col gap-6">
          {socials.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            >
              <SocialLink {...social} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
