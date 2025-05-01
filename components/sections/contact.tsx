'use client';
import { useState } from 'react';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setMessage(`Thank you for subscribing with ${email}!`);
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-6 md:mt-8 lg:mt-10 w-full sm:px-6 max-w-md mx-auto">
      {/* Main Content */}
      <div className="p-6">
        <h2 className="text-3xl text-center sm:text-4xl md:text-[44px] font-extrabold font-inter text-foreground mb-4">
          Contact Us
        </h2>
        <h3 className="pb-4 text-[14px] text-center font-medium font-dm-sans text-foreground/80 mb-4">
          Have the best portfolio-building resources delivered to your email
          sign up now!
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 items-stretch">
          <div className="flex-grow-[2]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full px-4 py-2 border bg-background-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EDDE2] placeholder-foreground/60 text-foreground"
              required
            />
          </div>

          <div className="flex-grow">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-2 rounded-md text-white font-medium ${
                isSubmitting
                  ? 'bg-[#2bcbd1] cursor-not-allowed'
                  : 'bg-[#3EDDE2] hover:bg-[#2bcbd1]'
              } transition-colors`}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-3 text-green-500 dark:text-green-400 text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
