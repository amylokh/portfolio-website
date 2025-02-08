// components/education/education.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true, 
  imports: [CommonModule],
  template: `
    <section id="education" class="py-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-[#1a2b3b] mb-8">Education</h2>
        <div class="space-y-8">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold">MBA in Business Analytics</h3>
            <p class="text-[#4a5567]">SCMHRD | Symbiosis International University, Pune</p>
            <p class="text-[#4a5567]">CGPA: 7.56/10 | Apr 2024</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold">B.Tech in Computer Science and Engineering</h3>
            <p class="text-[#4a5567]">Vellore Institute of Technology | VIT University, Vellore</p>
            <p class="text-[#4a5567]">CGPA: 8.52/10 | Apr 2019</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {}
