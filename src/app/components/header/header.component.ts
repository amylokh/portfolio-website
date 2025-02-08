import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { headerAnimation, navItemAnimation, slideDown } from '../../animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  animations: [headerAnimation, navItemAnimation, slideDown],
  template: `
    <header [@headerAnimation] class="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-5">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <h1 class="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1a2b3b] to-[#2d6bff] bg-clip-text text-transparent">
            Amey Lokhande
          </h1>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden text-[#1a2b3b] hover:text-[#2d6bff]"
            (click)="toggleMenu()"
            aria-label="Toggle menu">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              [class.hidden]="isMenuOpen"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              [class.hidden]="!isMenuOpen"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a *ngFor="let item of navItems; let i = index"
               [href]="item.href"
               [@navItemAnimation]="{value: '', params: {delay: i * 100}}"
               class="text-[#1a2b3b] hover:text-[#2d6bff] transition-colors duration-300 
                      relative after:content-[''] after:absolute after:w-0 after:h-0.5 
                      after:bg-[#2d6bff] after:left-0 after:-bottom-1 
                      hover:after:w-full after:transition-all after:duration-300">
              {{item.label}}
            </a>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div 
          class="md:hidden"
          [class.hidden]="!isMenuOpen"
          [@slideDown]>
          <div class="pt-4 pb-3 space-y-3">
            <a *ngFor="let item of navItems; let i = index"
               [href]="item.href"
               (click)="toggleMenu()"
               class="block text-[#1a2b3b] hover:text-[#2d6bff] transition-colors duration-300 py-2">
              {{item.label}}
            </a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = false;
  navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
