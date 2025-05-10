'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="relative overflow-hidden">
      
      {/* <div
  className="absolute animate-blob1 bg-[#2042BB] rounded-full opacity-60 mix-blend-multiply blur-2xl"
  style={{ width: '200px', height: '200px', top: '0', left: '0', zIndex: 0 }}
/>
<div
  className="absolute animate-blob2 bg-[#313A5B] rounded-full opacity-40 mix-blend-multiply blur-2xl"
  style={{ width: '200px', height: '200px', top: '0', left: '0', zIndex: 0 }}
/>
<div
  className="absolute animate-blob3 bg-[#3CC9CD] rounded-full opacity-50 mix-blend-multiply blur-2xl"
  style={{ width: '200px', height: '200px', top: '0', left: '0', zIndex: 0 }}
/> */}

      <div className="relative z-10 px-6 md:px-24 pt-20 pb-32">
        <h1 className="text-4xl md:text-7xl lg:text-[108px] font-bold text-white leading-tight max-w-5xl mb-8">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
          {subtitle}
        </p>
        <Link href={buttonLink}>
          <Button variant="primary" className="rounded-full py-2 px-5 font-bold">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;