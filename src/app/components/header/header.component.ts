import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-[#1a2b3b]">Amey Lokhande</h1>
        <div class="space-x-6">
          <a href="#about" class="text-[#1a2b3b] hover:text-[#2d6bff]">About</a>
          <a href="#experience" class="text-[#1a2b3b] hover:text-[#2d6bff]">Experience</a>
          <a href="#education" class="text-[#1a2b3b] hover:text-[#2d6bff]">Education</a>
          <a href="#contact" class="text-[#1a2b3b] hover:text-[#2d6bff]">Contact</a>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}
