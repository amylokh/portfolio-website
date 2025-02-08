// components/experience/experience.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sectionAnimation, staggerFadeInUp } from '../../animations';

@Component({
  selector: 'app-experience',
  standalone: true, 
  imports: [CommonModule],
  animations: [sectionAnimation, staggerFadeInUp],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {}