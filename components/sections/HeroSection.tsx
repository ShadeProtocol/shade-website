'use client';

import React from 'react';
// import Button from '@/components/ui/Button';

import Button from '../ui/Button';


const HeroSection: React.FC = () => {
  const handleViewDocs = () => {
    window.open('/docs', '_blank');
  };

  return (
    <section className="relative overflow-hidden min-h-screen w-screen pb-40">
      <div
        className="absolute animate-blob2 bg-[#313A5B] dark:bg-[#313A5B] rounded-full opacity-60 mix-blend-normal blur-2xl"
        style={{ width: '578.7235107421875px', height: '578.7235107421875px', top: '83px', left: '490.28px', zIndex: 0 }}
      />
      <div
        className="absolute animate-blob1 bg-[#3CC9CD] dark:bg-[#3CC9CD] rounded-full opacity-40 mix-blend-normal blur-2xl"
        style={{ width: '578.7235107421875px', height: '578.7235107421875px', top: '83px', left: '78px', zIndex: 0 }}
      />
      <div
        className="absolute animate-blob3 bg-[#2042BB] dark:bg-[#2042BB] rounded-full opacity-50 mix-blend-normal blur-2xl"
        style={{ width: '578.7235107421875px', height: '578.7235107421875px', top: '372.36px', left: '254.69px', zIndex: 0 }}
      />
      <div className="pl-16 mt-8">
        <div className="flex items-center justify-between mb-8 pl-4 pr-20">
          <div className="text-2xl font-bold text-[#21a0a4]">Shade</div>
          <div className="flex items-center space-x-8 dark:text-white">
            <a href="#how-to-use" className="text-base text-[#070e17] dark:text-white">How to Use</a>
            <a href="#docs" className="text-base text-[#070e17] dark:text-white">Docs</a>
            <a href="#sdk" className="text-base text-[#070e17] dark:text-white">SDK</a>
            <Button 
              variant="primary" className="rounded-full py-2 px-5 font-bold"
            >
              <span className="font-bold" style={{ fontWeight: 700 }}>Connect Wallet</span>
            </Button>
          </div>
        </div>
        <div className="max-w-5xl mt-32 text-left">
          <h1
            className="font-bold text-left text-4xl md:text-7xl lg:text-[108px] leading-[0.95] tracking-[-0.09em] max-w-[1177px] mb-8 font-inter"
            style={{
              fontFamily: "'Inter', 'sans-serif', 'Arial'",
              letterSpacing: '-9px',
              lineHeight: 0.95,
              maxWidth: '1177px',
              textAlign: 'left'
            }}
          >
            Seamless on-chain and offline payments for Web3.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Powering borderless transactions for DApps, merchants, and DeFi platforms.
          </p>
          <Button 
            onClick={handleViewDocs}
            variant="primary" className="rounded-full py-2 px-5 font-bold" style={{ fontWeight: 700 }}
          >
            View the Docs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;