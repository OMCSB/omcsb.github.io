export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  role?: string;
  company?: string;
  location?: string;
  excerpt: string;
  details: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Tools';
  proficiency: number; // 0-100
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}