// components/contact/contact.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-16">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-[#1a2b3b] mb-8">Get in Touch</h2>
        <div class="space-y-4">
          <p class="text-lg text-[#4a5567]">
            Based in Amravati, Maharashtra
          </p>
          <div class="flex justify-center space-x-6">
            <a href="mailto:amylokh@gmail.com" class="text-[#2d6bff] hover:text-[#1a5aff]">
              amylokh&#64;gmail.com
            </a>
            <span class="text-[#4a5567]">|</span>
            <a href="tel:+919763189806" class="text-[#2d6bff] hover:text-[#1a5aff]">
              +91-9763189806
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}