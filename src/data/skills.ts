import type { Skill } from "@/types/portfolio";

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 75 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 70 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 70 },

  // Backend
  { name: 'Python', category: 'Backend', proficiency: 80 },
  { name: 'Redis', category: 'Backend', proficiency: 80 },

  // Cloud
  { name: 'AWS', category: 'Cloud', proficiency: 70 },
  { name: 'GCP', category: 'Cloud', proficiency: 60 },
  { name: 'Docker', category: 'Cloud', proficiency: 80 },

  // Tools
  { name: 'Git', category: 'Tools', proficiency: 90 },
  { name: 'GitHub Actions', category: 'Tools', proficiency: 80 }
];