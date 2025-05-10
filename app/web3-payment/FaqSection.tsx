'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/icon/Button';
import type { FaqItem } from '@/types/web3-payment';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#08122719] py-4  dark:border-white relative overflow-hidden">
      <div 
        className="flex justify-between items-center cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-normal text-[#081227] dark:text-white">{question}</h3>
        <img 
          src="/images/img_frame_24x24.svg" alt={isOpen ?"Collapse" : "Expand"} 
          className={`dark:filter dark:invert transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="py-4 text-[#081227] dark:text-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How to get started with Shade",
      answer: "Sign up with your crypto wallet, create your merchant account, and start generating invoices in minutes. No lengthy approval process required."
    },
    {
      question: "How do I get Invoice?",
      answer: "You can create invoices through our merchant dashboard or by using our API/SDK in your application. Customize payment options, add your branding, and share with customers."
    },
    {
      question: "How are payments processed?",
      answer: "Payments are processed through our secure smart contracts on multiple blockchains. We handle the complexity while providing you with real-time payment status updates."
    },
    {
      question: "Who are Merchants?",
      answer: "Merchants are businesses, developers, or individuals who want to accept cryptocurrency payments. Our platform is designed for everyone from small businesses to large DeFi platforms."
    }
  ];

  const handleSeeMore = () => {
    window.open('/faq', '_blank');
  };

  return (
    <section className="py-20 bg-[#f2f2f2] dark:bg-[#070e17] dark:text-white text-black">
      <div className="container mx-auto px-6 md:px-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#081227] text-center mb-12 dark:text-white">
          Frequently asked questions
        </h2>
        
        <div className="max-w-3xl mx-auto text-black dark:text-white">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
          
          <div className="mt-8 text-center text-black dark:text-white">
            <Button 
              onClick={handleSeeMore}
              className="px-6 py-2 text-[#081227]! border-[#081227]! bg-[#f2f2f2] hover:bg-[#3ddde1] dark:text-white dark:border-white dark:bg-[#3ddde1] dark:hover:bg-[#21a0a4]"
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;