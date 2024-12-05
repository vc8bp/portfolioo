export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectContent {
  title: string;
  description: string;
}

export interface Project {
  slug: string;  // Added slug for unique identification
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  images: ProjectImage[];  // Array of image objects
  content: ProjectContent[];  // Array of content objects
}

export interface Skill {
  name: string;
  level: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}