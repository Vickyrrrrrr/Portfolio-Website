import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
        <div className="relative z-10">
          <Navbar />
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
