// components/contact/contact.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule, FontAwesomeModule],
  animations: [fadeInUp],
  template: `
    <section id="contact" class="py-16">
      <div class="max-w-4xl mx-auto text-center px-4" @fadeInUp>
        <h2 class="text-4xl font-bold text-[#1a2b3b] mb-4">Get in Touch</h2>
        <p class="text-lg text-[#4a5567] mb-12 max-w-2xl mx-auto">
          Let's connect! Feel free to reach out for collaborations or just a friendly chat.
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <!-- Location -->
          <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <fa-icon [icon]="locationIcon" class="text-2xl text-[#2d6bff] mb-4"></fa-icon>
            <h3 class="font-semibold text-[#1a2b3b] mb-2">Location</h3>
            <p class="text-[#4a5567]">Amravati, Maharashtra</p>
          </div>

          <!-- Email -->
          <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <fa-icon [icon]="emailIcon" class="text-2xl text-[#2d6bff] mb-4"></fa-icon>
            <h3 class="font-semibold text-[#1a2b3b] mb-2">Email</h3>
            <a href="mailto:amylokh@gmail.com" 
               class="text-[#2d6bff] hover:text-[#1a5aff] transition-colors duration-300">
              amylokh&#64;gmail.com
            </a>
          </div>

          <!-- Phone -->
          <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <fa-icon [icon]="phoneIcon" class="text-2xl text-[#2d6bff] mb-4"></fa-icon>
            <h3 class="font-semibold text-[#1a2b3b] mb-2">Phone</h3>
            <a href="tel:+919763189806" 
               class="text-[#2d6bff] hover:text-[#1a5aff] transition-colors duration-300">
              +91-9763189806
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  emailIcon = faEnvelope;
  phoneIcon = faPhone;
  locationIcon = faLocationDot;
}