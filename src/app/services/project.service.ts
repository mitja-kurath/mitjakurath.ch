import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product catalog, cart, and secure checkout system.',
      imageUrl: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: 'https://demo-ecommerce.example.com',
      githubUrl: 'https://github.com/username/ecommerce-project',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop organization and team collaboration features.',
      imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      demoUrl: 'https://task-app.example.com',
      githubUrl: 'https://github.com/username/task-management',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecast data, location search, and interactive maps.',
      imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      demoUrl: 'https://weather-app.example.com',
      githubUrl: 'https://github.com/username/weather-app',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern and responsive personal portfolio website showcasing skills and projects.',
      imageUrl: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'TypeScript', 'SASS', 'Netlify'],
      demoUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/username/portfolio',
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