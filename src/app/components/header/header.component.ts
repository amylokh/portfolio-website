import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { headerAnimation, navItemAnimation } from '../../animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  animations: [headerAnimation, navItemAnimation],
  template: `
    <header [@headerAnimation] class="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-5 flex flex-wrap justify-between items-center">
        <h1 class="text-2xl font-bold bg-gradient-to-r from-[#1a2b3b] to-[#2d6bff] bg-clip-text text-transparent">
          Amey Lokhande
        </h1>
        <div class="space-x-8">
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
      </nav>
    </header>
  `
})
export class HeaderComponent {
  navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];
}