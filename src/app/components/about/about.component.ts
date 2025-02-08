// components/about/about.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sectionAnimation } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  animations: [sectionAnimation],
  imports: [CommonModule],
  template: `
    <section [@sectionAnimation] id="about" class="py-16">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-[#1a2b3b] mb-6">Product Management Professional</h2>
        <p class="text-lg text-[#4a5567] mb-8">
          With 3.5+ years of experience in product and technology roles, and an MBA in Business Analytics,
          I'm passionate about leveraging technical and analytical skills to drive user-centric product 
          development and strategic business growth.
        </p>
        <div class="flex justify-center space-x-4">
          <a href="mailto:amylokh@gmail.com" target="_blank"
             class="bg-[#2d6bff] text-white px-6 py-2 rounded-lg hover:bg-[#1a5aff] transition-colors">
            Contact Me
          </a>
          <a href="https://www.linkedin.com/in/amey-lokhande/" target="_blank"
             class="border border-[#2d6bff] text-[#2d6bff] px-6 py-2 rounded-lg hover:bg-[#2d6bff] hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
