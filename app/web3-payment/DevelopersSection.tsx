'use client';

import React from 'react';
import Button from '@/components/ui/icon/Button';

const DevelopersSection: React.FC = () => {
  const handleSeeDocumentation = () => {
    window.open('/documentation', '_blank');
  };

  return (
    <section className="py-20 bg-[#070e17] dark:bg-[#070e17] dark:text-white">
      <div className="container mx-auto px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shade Developers
            </h2>
            <p className="text-xl text-white mb-8">
              With our ready-to-use and developer friendly APIs, SDKs and plugins, you
              can easily integrate to Shade to your website or app for FREE to start
              receiving payments in a breeze.
            </p>
            <Button 
              onClick={handleSeeDocumentation}
              variant="primary" className="rounded-full py-2 px-5 font-bold"
            >
              See Documentation
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="/images/img_developerscodeimgsvg.png" alt="Developer code" className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;