import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-under-progress',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './page-under-progress.component.html',
  styles: [`
    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class PageUnderProgressComponent implements OnInit {
  cogIcon = faCog;
  backIcon = faArrowLeft;

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
