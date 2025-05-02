import { Component, inject, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter = 'all';

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
    this.filteredProjects = [...this.projects];
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;

    if (filter === 'all') {
      this.filteredProjects = [...this.projects];
    } else if (filter === 'featured') {
      this.filteredProjects = this.projects.filter(project => project.featured);
    }
  }
}
