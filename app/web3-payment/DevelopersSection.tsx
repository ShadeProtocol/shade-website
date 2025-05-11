'use client';

import React from 'react';
import Button from '@/components/ui/icon/Button';

const DevelopersSection: React.FC = () => {
  const handleSeeDocumentation = () => {
    window.open('/documentation', '_blank');
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#070e17]">
      {/* Gradient blobs background */}
      <div
        className="absolute rounded-full blur-2xl z-0"
        style={{
          background: '#313A5B',
          width: '600px',
          height: '600px',
          top: '0px',
          left: '40%',
          position: 'absolute',
          zIndex: 0,
          opacity: 0.25
        }}
      />
      <div
        className="absolute rounded-full blur-2xl z-0"
        style={{
          background: '#3CC9CD',
          width: '600px',
          height: '600px',
          top: '0px',
          left: '10%',
          position: 'absolute',
          zIndex: 0,
          opacity: 0.18
        }}
      />
      <div
        className="absolute rounded-full blur-2xl z-0"
        style={{
          background: '#2042BB',
          width: '600px',
          height: '600px',
          top: '300px',
          left: '25%',
          position: 'absolute',
          zIndex: 0,
          opacity: 0.22
        }}
      />
      <div className="container mx-auto px-6 md:px-24 relative z-10">
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
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="/images/img_developerscodeimgsvg.png"
              alt="Developer code"
              className="w-full max-w-[600px] h-auto"
              style={{ background: 'none', boxShadow: 'none', border: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;