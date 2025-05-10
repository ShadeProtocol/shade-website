import React from 'react';
import Image from 'next/image';
import FeatureSection from './FeatureSection';

export default function BlockchainPaymentPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#070e17]">
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <Image
                src="/images/img_serverroomisometricinternetequipmentindustrydatacenter_1_616x755.png" alt="Server room isometric illustration"
                width={616}
                height={755}
                className="z-10 relative"
              />
              <div className="absolute top-16 left-1 z-0">
                <Image
                  src="/images/img_ellipse_1.svg" alt="Background ellipse"
                  width={518}
                  height={518}
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-10">
            <h1 className="text-5xl md:text-6xl font-bold font-inter mb-6">
              Simple On-chain payments
            </h1>
            <p className="text-2xl font-dm-sans mb-12">
              Building a business is hard. Getting paid shouldn't be.
            </p>
            
            <FeatureSection />
          </div>
        </div>
      </div>
    </div>
  );
}