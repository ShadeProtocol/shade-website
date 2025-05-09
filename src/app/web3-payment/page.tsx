import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProcessSection from './ProcessSection';
import DevelopersSection from './DevelopersSection';
import FaqSection from './FaqSection';
import ContactSection from './ContactSection';

export const metadata = {
  title: 'Shade Web3 Payment Platform',
  description: 'Seamless on-chain and offline payments for Web3',
};

const Web3PaymentPage = () => {
  return (
<main className="bg-[#f2f2f2] dark:bg-[#070e17] transition-colors duration-300 dark:text-white relative overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <DevelopersSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
};

export default Web3PaymentPage;