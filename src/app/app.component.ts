// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    <div class="min-h-screen bg-[#f9fafb]">
      <app-header></app-header>
      <main class="container mx-auto px-4 py-8">
        <app-about></app-about>
        <app-experience></app-experience>
        <app-education></app-education>
        <app-certifications></app-certifications>
        <app-contact></app-contact>
      </main>
    </div>
  `
})
export class AppComponent {}