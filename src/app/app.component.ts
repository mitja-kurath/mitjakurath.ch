import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { ScrollService } from './services/scroll.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private themeService = inject(ThemeService);
  private scrollService = inject(ScrollService);

  @HostBinding('class.dark-mode')
  get isDarkMode() {
    return this.themeService.isDarkMode();
  }

  ngOnInit() {
    this.themeService.initTheme();
    this.scrollService.initScrollAnimation();
  }
}
