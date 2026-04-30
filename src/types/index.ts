export interface Skill {
  name: string;
  pct: number;
}

export interface TimelineItem {
  dot: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  badge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  num: string;
  icon: string;
  name: string;
  stack: string[];
  description: string;
  techStack: string[];
  fullDescription: string;
  challenges: string[];
  improvements: string[];
  gradient: string;
  // নতুন প্রপার্টি যোগ করা হলো (Optional রাখা হয়েছে যাতে এরর না আসে)
  liveUrl?: string;
  githubUrl?: string;
}