import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "JavaScript", iconSlug: "javascript" },
      { name: "C#", iconSlug: "C#" },
      { name: "Rust", iconSlug: "rust" },
      { name: "F#", iconSlug: "fsharp" },
      { name: "SQL", iconSlug: "sql" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: ".NET", iconSlug: "dotnet" },
      { name: "Node.js", iconSlug: "nodejs" },
      { name: "Vue", iconSlug: "vue" },
      { name: "React", iconSlug: "react" },
      { name: "Nuxt", iconSlug: "nuxt" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", iconSlug: "git" },
      { name: "Docker", iconSlug: "docker" },
      { name: "GitHub CI", iconSlug: "github" },
      { name: "Linux", iconSlug: "linux" },
      { name: "AWS", iconSlug: "aws" },
      { name: "Azure", iconSlug: "azure" },
      { name: "Powershell", iconSlug: "powershell" },
    ],
  },
];
