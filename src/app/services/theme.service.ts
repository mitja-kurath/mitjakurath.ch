import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);
  
  initTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      this.setDarkMode(true);
    } else if (savedTheme === 'light') {
      this.setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setDarkMode(e.matches);
      }
    });
  }
  
  toggleTheme(): void {
    this.setDarkMode(!this.isDarkMode());
  }
  
  private setDarkMode(isDark: boolean): void {
    this.isDarkMode.set(isDark);
    
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}