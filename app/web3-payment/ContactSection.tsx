'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/icon/Button';
import InputField from '@/components/ui/InputField';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#f2f2f2] dark:bg-[#070e17] dark:text-white">
      <div className="container mx-auto px-6 md:px-24 dark:text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-[#070e17] text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-[#070e17] mb-8 max-w-lg mx-auto">
          Have the best portfolio-building resources delivered to your email sign up now!
        </p>
        
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <InputField
            type="email" placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="grow bg-[#e7edf9] rounded-lg"
            required
          />
          <Button 
            type="submit" variant="primary" className="rounded-lg py-3 px-6 font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        
        {isSuccess && (
          <p className="text-green-600 text-center mt-4">
            Thank you for subscribing!
          </p>
        )}
        
        <footer className="mt-32 bg-[#081227] py-4 px-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">Created Shade 2025</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white">
                <img src="/images/img_socials.svg" alt="Social" />
              </a>
              <a href="#" className="text-white">
                <img src="/images/img_socials_24x24.svg" alt="Social" />
              </a>
              <a href="#" className="text-white">
                <img src="/images/img_socials_1.svg" alt="Social" />
              </a>
              <a href="#" className="text-white">
                <img src="/images/img_socials_2.svg" alt="Social" />
              </a>
              <a href="#" className="text-white">
                <img src="/images/img_socials_3.svg" alt="Social" />
              </a>
              <a href="#" className="text-white">
                <img src="/images/img_socials_4.svg" alt="Social" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;