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
  templateUrl: './about.component.html'
})
export class AboutComponent {
  userIcon = faUser;
  emailIcon = faEnvelope;
  linkedinIcon = faLinkedin;
}
