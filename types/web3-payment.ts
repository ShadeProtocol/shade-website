export interface Feature {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}