import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';
import Lenis from '@studio-freight/lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary min-h-screen">
        <div className="relative z-10 border-b border-gray-200">
          <Navbar />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
        <div className="relative z-10">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
