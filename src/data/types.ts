export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  ogImage: string;
  siteDescription: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  iconSlug: string;
}

export interface SkillCategory {
  category: 'Languages' | 'Frameworks' | 'Tools';
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  startYear: number;
  endYear: number | 'Present';
  gpa?: string;
  highlights?: string[];
}
