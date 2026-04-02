import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack web application that solves a real-world problem. Replace this with your actual project description — what it does, who it helps, and what makes it interesting.',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/alejandro-sb/project-alpha',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    title: 'CLI Toolkit',
    description:
      'A developer productivity tool built with Node.js that automates repetitive tasks. Published on npm with over X weekly downloads.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    githubUrl: 'https://github.com/alejandro-sb/cli-toolkit',
    featured: true,
  },
  {
    title: 'Open Source Contribution',
    description:
      'Contributed a significant feature to a popular open source project, improving performance by X% for users with large datasets.',
    tags: ['Open Source', 'Python', 'Performance'],
    githubUrl: 'https://github.com/some-org/some-repo',
  },
  {
    title: 'Side Project',
    description:
      'A weekend project exploring a new technology or solving a personal pain point. Describe the problem, your approach, and what you learned.',
    tags: ['Rust', 'WebAssembly'],
    githubUrl: 'https://github.com/alejandro-sb/side-project',
    demoUrl: 'https://example.com/demo',
  },
];
