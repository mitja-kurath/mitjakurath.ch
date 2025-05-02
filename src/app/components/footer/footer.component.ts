import { Component, inject} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private scrollService = inject(ScrollService);
  currentYear = new Date().getFullYear();
  isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
  
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}