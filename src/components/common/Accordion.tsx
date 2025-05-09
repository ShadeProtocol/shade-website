'use client';

import React, { useState } from 'react';


interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-[#08122719] py-6">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleAccordion}
      >
        <h3 className="text-lg text-white">{title}</h3>
        <div className="w-6 h-6">
          <img 
            src="/images/img_frame.svg" alt={isOpen ?"Collapse" : "Expand"} 
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 text-white">
          {children || (
            <p>Additional information will be displayed here.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;