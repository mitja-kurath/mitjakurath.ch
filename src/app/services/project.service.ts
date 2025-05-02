import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern and responsive personal portfolio website showcasing skills and projects.',
      imageUrl: 'assets/images/portfolio.png',
      technologies: ['Angular', 'TypeScript', 'SASS', 'Vercel'],
      demoUrl: 'https://www.mitjakurath.ch',
      githubUrl: 'https://github.com/mitja-kurath/mitjakurath.ch',
      featured: false
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  addProject(project: Project): void {
    const newId = Math.max(...this.projects.map(p => p.id)) + 1;
    this.projects.push({
      ...project,
      id: newId
    });
  }
}