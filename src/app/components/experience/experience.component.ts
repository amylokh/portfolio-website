// components/experience/experience.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sectionAnimation, staggerFadeInUp } from '../../animations';

@Component({
  selector: 'app-experience',
  standalone: true, 
  imports: [CommonModule],
  animations: [sectionAnimation, staggerFadeInUp],
  template: `
    <section [@sectionAnimation] id="experience" class="py-16 bg-white">
      <div [@staggerFadeInUp] class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-[#1a2b3b] mb-8">Work Experience</h2>
        <div class="space-y-8">
          <div class="border-l-4 border-[#2d6bff] pl-4">
            <h3 class="text-xl font-semibold">Technology Associate (TLDP)</h3>
            <p class="text-[#4a5567]">Boston Scientific, Gurugram | Jun'24 – Present</p>
            <ul class="mt-4 space-y-2 text-[#4a5567]">
              <li>• Serving as an Associate Product Manager, driving MyOrders, enabling a direct-to-customer business model</li>
              <li>• Collaborated cross-functionally to gather business requirements and design user process flows</li>
              <li>• Crafted user stories for 'Smart Actions', increasing content interaction efficiency by over 40%</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-[#2d6bff] pl-4">
            <h3 class="text-xl font-semibold">Full Stack Engineer</h3>
            <p class="text-[#4a5567]">F1000 – Taylor & Francis Group, Bangalore | Apr'21 – May'22</p>
            <ul class="mt-4 space-y-2 text-[#4a5567]">
              <li>• Engineered publishing platforms, reducing article submission lead time by 50%</li>
              <li>• Supported the launch of 8 new open research publishing platforms</li>
              <li>• Created and executed various proof of concepts</li>
            </ul>
          </div>
          
          <div class="border-l-4 border-[#2d6bff] pl-4">
            <h3 class="text-xl font-semibold">Junior Full Stack Engineer</h3>
            <p class="text-[#4a5567]">Taylor & Francis Group, Bangalore | Jul'19 – Mar'21</p>
            <ul class="mt-4 space-y-2 text-[#4a5567]">
              <li>• Improved user retention and reduced submission time by over 80%</li>
              <li>• Led rapid integration project with F1000Research</li>
              <li>• Coordinated over 10 successful product launches</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}