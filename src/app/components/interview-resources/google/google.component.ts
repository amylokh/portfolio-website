import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './google.component.html'
})
export class GoogleComponent {
  checkIcon = faCheckCircle;
  backIcon = faArrowLeft;
  emailIcon = faEnvelope;

  topics = [
    {
      title: 'Product Design & Improvement',
      points: [
        'Framework to tackle design questions',
        'User-centric approach methodology',
        'Sample questions and solutions'
      ]
    },
    {
      title: 'Product Strategy & Growth',
      points: [
        'Strategic thinking frameworks',
        'Market sizing approaches',
        'Growth strategy templates'
      ]
    },
    {
      title: 'Root Cause Analysis',
      points: [
        'Structured problem solving',
        'Metrics analysis approach',
        'Case study examples'
      ]
    },
    {
      title: 'Cross-functional Collaboration',
      points: [
        'Stakeholder management',
        'Communication strategies',
        'Leadership scenarios'
      ]
    }
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/interview-resources']);
  }
}
