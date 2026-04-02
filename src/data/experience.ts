import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Company Name',
    companyUrl: 'https://example.com',
    location: 'City, Country',
    startDate: 'Jan 2023',
    endDate: 'Present',
    bullets: [
      'Led the design and implementation of a microservices architecture that reduced latency by 40%.',
      'Mentored a team of 3 junior engineers, establishing code review processes and engineering standards.',
      'Collaborated with product and design to ship X major features, driving Y% increase in user retention.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Previous Company',
    companyUrl: 'https://example.com',
    location: 'City, Country',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    bullets: [
      'Built and maintained RESTful APIs serving 1M+ requests per day using Node.js and PostgreSQL.',
      'Migrated a legacy monolith to a modern React frontend, improving Lighthouse performance score from 45 to 92.',
      'Implemented CI/CD pipelines with GitHub Actions, reducing deployment time from 45 minutes to 8 minutes.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Startup Inc.',
    location: 'Remote',
    startDate: 'Jan 2021',
    endDate: 'May 2021',
    bullets: [
      'Developed a data visualization dashboard using React and D3.js, used daily by the operations team.',
      'Fixed 20+ bugs across the frontend codebase and wrote unit tests reaching 85% coverage.',
    ],
  },
];
