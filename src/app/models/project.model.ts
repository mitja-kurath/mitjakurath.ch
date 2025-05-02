export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean;
  }