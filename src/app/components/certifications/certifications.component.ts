// components/certifications/certifications.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sectionAnimation, staggerFadeInUp } from '../../animations';

@Component({
  selector: 'app-certifications',
  standalone: true, 
  imports: [CommonModule],
  animations: [staggerFadeInUp],
  templateUrl: './certifications.component.html'
})
export class CertificationsComponent {}