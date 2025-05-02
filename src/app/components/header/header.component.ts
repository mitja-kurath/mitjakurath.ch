import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  private scrollService = inject(ScrollService);
  
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  
  constructor() {
    this.scrollService.activeSection.subscribe(section => {
      this.activeSection = section;
    });
  }
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.isMobileMenuOpen = false;
  }
}