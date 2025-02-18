import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ContactComponent } from '../contact/contact.component';
import { InterviewResourcesComponent } from '../interview-resources/interview-resources.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    InterviewResourcesComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    <app-about></app-about>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-interview-resources></app-interview-resources>
    <app-certifications></app-certifications>
    <app-contact></app-contact>
  `
})
export class MainComponent {}
