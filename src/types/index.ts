export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  gradient: string;
  stats: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'E-Commerce' | 'SaaS' | 'Mobile Apps' | 'Brand Identity' | 'FinTech';
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  tags: string[];
  year: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  specialties: string[];
  linkedin: string;
  twitter?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlightMetric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Pricing' | 'Process';
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  serviceNeeded: string;
  budgetRange: string;
  message: string;
}
