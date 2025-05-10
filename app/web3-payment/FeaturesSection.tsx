'use client';

import React from 'react';
import type { Feature } from '@/types/web3-payment';
import { ThemeToggle } from '@/components/ui/theme/ThemeToggle';



interface FeatureProps {
  number: string;
   title: string;
  description: string;
   imageSrc: string;
  imagePosition: 'left' | 'right';
}

const Feature: React.FC<Feature> = ({ 
  number, 
  title, 
  description, 
  imageSrc, 
  imagePosition 
}) => {
  return (
    <div className="py-16 bg-[#f2f2f2] dark:bg-[#070e17] dark:text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-24">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
          <div className="w-full md:w-1/2">
            <div className="bg-[#0b131e] text-[#3ddde1] w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">{number}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#070e17] mb-6 dark:text-white">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-[#070e17] dark:text-white">
              {description}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      number: "1.",
      title: "Merchant Dashboard with Wallet-Based Registration",
      description: "Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.",
      imageSrc: "/images/img_serverroomisometricinternetequipmentindustrydatacenter_1.png",
      imagePosition: 'right' as const
    },
    {
      number: "2",
      title: "Custom Invoice Creation with Token-Level Control and Optional Email Notifications",
      description: "Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.",
      imageSrc: "/images/img_serverroomisometricinternetequipmentindustrydatacenter_1_479x643.png",
      imagePosition: 'left' as const
    },
    {
      number: "3",
      title: "Secret Key Mechanism for Secure API/SDK Access",
      description: "Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.",
      imageSrc: "/images/img_serverroomisometricinternetequipmentindustrydatacenter_1.png",
      imagePosition: 'right' as const
    },
    {
      number: "4",
      title: "Smart Contract-Based Transaction Processing and Revenue Fee Capture",
      description: "Merchants sign up with their crypto wallets for secure, passwordless, and decentralized access.",
      imageSrc: "/images/img_serverroomisometricinternetequipmentindustrydatacenter_1_479x643.png",
      imagePosition: 'left' as const
    }
  ];

  return (
    <>
      {features.map((feature, index) => (
        <Feature 
          key={index}
          number={feature.number}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.imageSrc}
          imagePosition={feature.imagePosition}
        />
      ))}
    </>
  );
};

export default FeaturesSection;