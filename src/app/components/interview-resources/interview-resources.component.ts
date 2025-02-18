import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { sectionAnimation } from '../../animations';

interface Resource {
  company: string;
  role: string;
  logo: string;
  preview: string;
}

@Component({
  selector: 'app-interview-resources',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  animations: [sectionAnimation],
  templateUrl: './interview-resources.component.html'
})
export class InterviewResourcesComponent {
  constructor(public router: Router) { }

  navigateToDetails(company: string) {
    if (company.toLowerCase() === 'google') {
      this.router.navigate(['/interview-resources/google']);
    } else {
      this.router.navigate([`/interview-resources/${company.toLowerCase()}`]);
    }
  }

  lockIcon = faLock;
  arrowIcon = faArrowRight;
  
  resources: Resource[] = [
    {
      company: 'Google',
      role: 'Associate Product Manager',
      logo: 'assets/images/google-logo.png',
      preview: 'Interview process, preparation strategy, and key focus areas for Google PM role.'
    },
    {
      company: 'Boston Scientific',
      role: 'Technology Leadership Development Program',
      logo: 'assets/images/boston-scientific-logo.jpeg',
      preview: 'TLDP selection process, assessment center experience, and tips for success.'
    },
    {
      company: 'Optum',
      role: 'Product Intern',
      logo: 'assets/images/optum-logo.png',
      preview: 'Interview rounds, case study approach, and preparation resources.'
    },
    {
      company: 'Taylor & Francis',
      role: 'Full Stack Engineer',
      logo: 'assets/images/tf-logo.png',
      preview: 'Technical interview experience and coding round insights.'
    },
    {
      company: 'SCMHRD',
      role: 'MBA Admission',
      logo: 'assets/images/symbiosis-logo.jpg',
      preview: 'GD-PI preparation, important topics, and interview questions.'
    }
  ];
}
