export type Language = 'pt' | 'en';

export type ServiceGroup = 'it-support' | 'franktech';

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  group: ServiceGroup;
  description: string;
  descriptionEn: string;
  deliverables: string[];
  deliverablesEn: string[];
  typicalTimeline?: string; // Shown only for FrankTech services
  typicalTimelineEn?: string;
  icon: string;
}

export type SkillLevel = 'Avançado' | 'Intermédio' | 'Básico';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  description?: string;
}

export interface SkillCategory {
  title: string;
  titleEn: string;
  skills: SkillItem[];
}

export interface FaqItem {
  id: string;
  questionPt: string;
  questionEn: string;
  answerPt: string;
  answerEn: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  link?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  organization: string;
  quote: string;
}

export interface TimelineItem {
  period: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  achievements: string[];
  type: 'education' | 'internship' | 'support' | 'training' | 'business' | 'admin';
}
