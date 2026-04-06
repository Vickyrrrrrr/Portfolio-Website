import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading or wait for true window load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2500); // Luxury delay
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#faf9f6]"
        >
          {/* Layered "Shadow" Shimmer Background */}
          <div className="absolute inset-0 overflow-hidden">
             <motion.div 
               animate={{ 
                 x: ["-100%", "100%"],
                 opacity: [0, 0.3, 0]
               }}
               transition={{ 
                 duration: 2, 
                 repeat: Infinity, 
                 ease: "linear" 
               }}
               className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent skew-x-[-20deg] blur-3xl"
             />
          </div>

          <div className="relative flex flex-col items-center">
            {/* The "Premium Shadow" Logo/Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-24 h-24 flex items-center justify-center"
            >
              {/* Pulsing Shadow Rings */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-accent/10 blur-xl"
              />
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 rounded-full border border-accent/20"
              />
              
              <span className="text-4xl font-serif font-bold text-black-100 relative z-10">V</span>
            </motion.div>

            {/* Glowing Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-secondary/60">
                Architecting Intelligence
              </h2>
              {/* Progress Bar with Shadow Loader Shimmer */}
              <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden mt-4 relative">
                 <motion.div 
                   initial={{ width: "0%" }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   className="h-full bg-accent relative z-10"
                 />
                 <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-1/2 bg-white/40 blur-sm"
                 />
              </div>
            </motion.div>
          </div>

          {/* Bottom Shadow Fade for Premium Feel */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100/50 to-transparent blur-2xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
