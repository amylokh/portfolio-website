// components/contact/contact.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule, FontAwesomeModule],
  animations: [fadeInUp],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  emailIcon = faEnvelope;
  phoneIcon = faPhone;
  locationIcon = faLocationDot;
  linkedinIcon = faLinkedin;
}