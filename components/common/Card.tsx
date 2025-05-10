'use client';

import React from 'react';

interface CardProps {
  number?: string;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ number, title, description, className = '' }) => {
  return (
    <div className={`bg-[#070e17] rounded-lg p-4 ${className}`}>
      {number && (
        <div className="bg-[#0b131e] text-[#3ddde1] w-fit px-4 py-1 rounded-full mb-4">
          {number}
        </div>
      )}
      <h3 className="text-white text-3xl font-bold mb-4">{title}</h3>
      <p className="text-white text-base">{description}</p>
    </div>
  );
};

export default Card;