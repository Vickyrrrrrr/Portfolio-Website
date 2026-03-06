import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-24 h-24 flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-[12px] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" key={name} title={name}>
      <img src={icon} alt={name} className="w-12 h-12 object-contain filter drop-shadow-sm opacity-90" />
      <span className="mt-2 text-[12px] font-medium text-secondary">{name}</span>
    </div>
  ));
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 max-w-4xl mx-auto">
    {renderTechnologies()}
  </div>
);

export default SectionWrapper(Tech, "");
