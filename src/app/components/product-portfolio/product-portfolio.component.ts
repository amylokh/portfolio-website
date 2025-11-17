import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faChartLine, faPalette, faLightbulb, faBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-portfolio.component.html',
  styleUrl: './product-portfolio.component.scss'
})
export class ProductPortfolioComponent {
  briefcaseIcon = faBriefcase;
  chartIcon = faChartLine;
  paletteIcon = faPalette;
  lightbulbIcon = faLightbulb;
  bookIcon = faBook;
}