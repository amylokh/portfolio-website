// components/about/about.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { sectionAnimation } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  animations: [sectionAnimation],
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <section [@sectionAnimation] id="about" class="py-7">
      <div class="max-w-4xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Photo Section -->
          <div class="flex justify-center">
            <div class="relative">
              <div class="w-64 h-64 overflow-hidden rounded-full border-4 border-[#2d6bff] shadow-lg">
                <img 
                  src="assets/images/profile.jpg" 
                  alt="Amey Lokhande" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-md text-center min-w-[160px]">
                <span class="text-[#2d6bff] font-semibold">
                  Technology Associate
                </span>
              </div>
            </div>
          </div>

          <!-- Content Section -->
          <div class="text-left">
            <h2 class="text-4xl font-bold text-[#1a2b3b] mb-6">
              Product Management Professional
            </h2>
            <p class="text-lg text-[#4a5567] mb-8 leading-relaxed">
              With 3.5+ years of experience in product and technology roles, and an MBA in Business Analytics,
              I'm passionate about leveraging technical and analytical skills to drive user-centric product 
              development and strategic business growth.
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="mailto:amylokh@gmail.com" 
                 class="flex items-center justify-center bg-[#2d6bff] text-white px-6 py-3 rounded-lg hover:bg-[#1a5aff] transition-colors duration-300 shadow-md hover:shadow-lg">
                <fa-icon [icon]="emailIcon" class="mr-2"></fa-icon>
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/amey-lokhande/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center justify-center border-2 border-[#2d6bff] text-[#2d6bff] px-6 py-3 rounded-lg hover:bg-[#2d6bff] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg">
                <fa-icon [icon]="linkedinIcon" class="mr-2"></fa-icon>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  userIcon = faUser;
  emailIcon = faEnvelope;
  linkedinIcon = faLinkedin;
}
