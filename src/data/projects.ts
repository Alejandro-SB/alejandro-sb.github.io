import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Funzo",
    description:
      "Funzo is a fully featured library to use union types in C#. By default, it has the Result and Option types and source generators in order to have dedicated types for your business concepts.",
    tags: ["C#"],
    githubUrl: "https://github.com/alejandro-sb/funzo",
    featured: true,
  },
  {
    title: "Sorse",
    description:
      "Sorse is a little helper created just to use in Funzo. It allows you to define Source generated content with a fluent interface so you don't have to concatenate strings manually",
    tags: ["C#"],
    githubUrl: "https://github.com/alejandro-sb/Sorse",
    featured: true,
  },
  {
    title: "Join PDF utility",
    description:
      "Small and dirty utility created to join PDFs locally, without uploading documents to the internet. ",
    tags: ["Vue", "TypeScript"],
    githubUrl: "https://github.com/alejandro-sb/joinpdf",
    demoUrl: "https://alejandro-sb.github.io/joinpdf/",
    featured: true,
  },
];
