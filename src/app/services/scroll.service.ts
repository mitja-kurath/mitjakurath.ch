import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService implements OnDestroy {
  private scrollObserver: IntersectionObserver | null = null;
  activeSection = new BehaviorSubject<string>('home');
  
  initScrollAnimation(): void {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    
    animateElements.forEach(el => {
      animationObserver.observe(el);
    });
    
    const sections = document.querySelectorAll('section[id]');
    
    this.scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          this.activeSection.next(entry.target.id);
        }
      });
    }, { threshold: [0.5] });
    
    sections.forEach(section => {
      this.scrollObserver?.observe(section);
    });
  }
  
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  ngOnDestroy(): void {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
  }
}