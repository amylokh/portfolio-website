// components/experience/experience.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sectionAnimation, staggerFadeInUp } from '../../animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faBuilding } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-experience',
  standalone: true, 
  imports: [CommonModule, FontAwesomeModule],
  animations: [sectionAnimation, staggerFadeInUp],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  calendarIcon = faCalendar;
  buildingIcon = faBuilding;
}