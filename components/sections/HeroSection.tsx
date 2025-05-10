'use client';

import React from 'react';
import Button from '@/components/ui/icon/Button';
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