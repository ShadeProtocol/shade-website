'use client';
import { useState } from 'react';
import { PlusMinusIcon } from '../ui/icons/PlusMinusIcon';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqsData: FAQItem[] = [
  {
    id: 1,
    question: 'How to get started with Shade',
    answer: 'Sign up and start',
  },
  {
    id: 2,
    question: 'How do I get Invoice?',
    answer: 'Auto-generated post-payment',
  },
  {
    id: 3,
    question: 'How are payments processed?',
    answer: 'Via Stripe/PayPal',
  },
  {
    id: 4,
    question: 'Who are Merchants?',
    answer: 'Verified platform partners',
  },
];

const FAQSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleAnswer = (questionId: number) => {
    setExpandedQuestion((prevQuestion) =>
      prevQuestion === questionId ? null : questionId
    );
  };

  return (
    <div className="mt-28 pt-2 md:mt-24 lg:mt-28 w-full px-5 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-foreground mb-8 md:mb-12 text-center font-inter">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items - Improved responsive layout */}
        <ul className="space-y-4 pl-0 sm:pl-2">
          {faqsData.map((faq) => (
            <li
              key={faq.id}
              className="border-b border-gray-200 overflow-hidden font-dm-sans sm:text-lg">
              <button
                className="flex justify-between items-center w-full py-4 pr-2 sm:pr-5 font-medium sm:font-medium text-foreground hover:text-foreground/80 focus:outline-none transition-colors"
                onClick={() => toggleAnswer(faq.id)}
                aria-expanded={expandedQuestion === faq.id}
                aria-controls={`faq-answer-${faq.id}`}>
                <span className="text-left pl-4 flex-1 mr-6">
                  {faq.question}
                </span>
                <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                  <PlusMinusIcon isOpen={expandedQuestion === faq.id} />
                </span>
              </button>

              {/* Answer with smooth transition */}
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedQuestion === faq.id
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                }`}>
                <p className="text-sm sm:text-base text-foreground/80 px-4 sm:px-6 pb-2">
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* See More - Responsive sizing */}
        <div className="mt-8 md:mt-12 text-center">
          <button className="text-base md:text-lg font-bold text-foreground hover:text-foreground/70 transition-colors">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
