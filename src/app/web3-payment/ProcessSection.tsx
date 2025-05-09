'use client';

import React from 'react';

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-4xl font-bold text-[#070e17] mb-4">{number}</h3>
      <h4 className="text-3xl font-bold text-[#070e17] mb-4">{title}</h4>
      <p className="text-base text-[#070e17]">{description}</p>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      number: "1.",
      title: "Connect Wallet",
      description: "Sign up instantly using your crypto wallet — no passwords or paperwork."
    },
    {
      number: "2.",
      title: "Create & Share Invoices",
      description: "Use the dashboard or SDKs to generate customizable crypto invoices."
    },
    {
      number: "3.",
      title: "Get Paid & Withdraw",
      description: "Receive on-chain payments, track status in real-time, and withdraw anytime."
    }
  ];

  return (
    <section className="py-20 bg-[#f2f2f2] relative dark:bg-[#070e17] dark:text-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src="/images/img_group_1_645x1249.png" alt="Background pattern" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-6 md:px-24 relative z-10">
        <div className="mb-16 text-center">
          <div className="bg-[#0b131e] text-[#3ddde1] px-6 py-2 rounded-full inline-block mb-4">
            How it works
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#070e17] dark:text-white">
            From wallet to checkout <br />in minutes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;