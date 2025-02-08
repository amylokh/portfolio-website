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
    <section [@sectionAnimation] id="experience" class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div [@staggerFadeInUp] class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-[#1a2b3b] mb-12">Work Experience</h2>
        <div class="space-y-12">
          <!-- Boston Scientific -->
          <div class="relative flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0">
              <img 
                src="assets/images/boston-scientific-logo.jpeg" 
                alt="Boston Scientific Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="flex-grow">
              <h3 class="text-xl md:text-2xl font-semibold text-[#1a2b3b]">Technology Associate (TLDP)</h3>
              <p class="text-[#4a5567] mb-4">Boston Scientific, Gurugram | Jun'24 – Present</p>
              <ul class="space-y-2 text-[#4a5567]">
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Serving as an Associate Product Manager, driving MyOrders, enabling a direct-to-customer business model</span>
                </li>
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Collaborated cross-functionally to gather business requirements and design user process flows</span>
                </li>
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Crafted user stories for 'Smart Actions', increasing content interaction efficiency by over 40%</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Taylor & Francis -->
          <div class="relative flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0">
              <img 
                src="assets/images/tf-logo.png" 
                alt="Taylor & Francis Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="flex-grow">
              <h3 class="text-xl md:text-2xl font-semibold text-[#1a2b3b]">Full Stack Engineer</h3>
              <p class="text-[#4a5567] mb-4">F1000 – Taylor & Francis Group, Bangalore | Apr'21 – May'22</p>
              <ul class="space-y-2 text-[#4a5567]">
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Engineered publishing platforms, reducing article submission lead time by 50%</span>
                </li>
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Supported the launch of 8 new open research publishing platforms</span>
                </li>
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Created and executed various proof of concepts</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- T&F Junior Role -->
          <div class="relative flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0">
              <img 
                src="assets/images/tf-logo.png" 
                alt="Taylor & Francis Logo"
                class="w-full h-full object-contain"
              />
            </div>
            <div class="flex-grow">
              <h3 class="text-xl md:text-2xl font-semibold text-[#1a2b3b]">Junior Full Stack Engineer</h3>
              <p class="text-[#4a5567] mb-4">Taylor & Francis Group, Bangalore | Jul'19 – Mar'21</p>
              <ul class="space-y-2 text-[#4a5567]">
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Improved user retention and reduced submission time by over 80%</span>
                </li>
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Led rapid integration project with F1000Research</span>
                </li>
                <li class="flex items-start">
                  <span class="text-[#2d6bff] mr-2">•</span>
                  <span>Coordinated over 10 successful product launches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}