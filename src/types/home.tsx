export interface FeatureProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}