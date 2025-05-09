'use client';

import React from 'react';

import type { Feature } from '@/types/web3-payment';



interface FeatureProps {
  number: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ number, title, description }) => {
  return (
    <div className="mb-10">
      <p className="text-lg font-bold font-inter text-[#3ddde1] mb-2">{number}</p>
      <h2 className="text-2xl md:text-3xl font-bold font-dm-sans mb-4">{title}</h2>
      <p className="text-base font-dm-sans whitespace-pre-line">{description}</p>
    </div>
  );
};

export default function FeatureSection() {
  const features: FeatureProps[] = [
    {
      number: "01",
      title: "Merchant Dashboard with Wallet-Based Registration",
      description: "Merchants can register and log in to Shade using their crypto wallets, ensuring a secure and decentralized identity management system. This \napproach eliminates the need for traditional username/password \ncredentials and embraces a trustless, blockchain-native user experience."
    },
    {
      number: "02",
      title: "Custom Invoice Creation with Token-Level Control and Optional Email Notifications",
      description: ""
    },
    {
      number: "03",
      title: "Secret Key Mechanism for Secure API/SDK Access",
      description: ""
    },
    {
      number: "04",
      title: "Smart Contract-Based Transaction Processing and Revenue Fee Capture",
      description: ""
    }
  ];

  return (
    <div>
      {features.map((feature, index) => (
        <Feature 
          key={index}
          number={feature.number}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}