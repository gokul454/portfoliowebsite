export interface Project {
  id: string;
  index: string;
  title: string;
  client: string;
  duration?: string;
  category: string;
  overview: string;
  tags: string[];
  problem: string;
  solution: string;
  responsibilities: string[];
  technology: string[];
  challenges: string;
  outcome: string;
  lessons: string;
  cover: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}
