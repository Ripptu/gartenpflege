import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}