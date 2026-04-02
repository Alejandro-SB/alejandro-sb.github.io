import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', iconSlug: 'typescript' },
      { name: 'Python',     iconSlug: 'python' },
      { name: 'Rust',       iconSlug: 'rust' },
      { name: 'Go',         iconSlug: 'go' },
      { name: 'SQL',        iconSlug: 'sql' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'React',    iconSlug: 'react' },
      { name: 'Astro',    iconSlug: 'astro' },
      { name: 'Node.js',  iconSlug: 'nodejs' },
      { name: 'FastAPI',  iconSlug: 'fastapi' },
      { name: 'Next.js',  iconSlug: 'nextjs' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git',        iconSlug: 'git' },
      { name: 'Docker',     iconSlug: 'docker' },
      { name: 'GitHub CI',  iconSlug: 'github' },
      { name: 'Linux',      iconSlug: 'linux' },
      { name: 'AWS',        iconSlug: 'aws' },
    ],
  },
];
