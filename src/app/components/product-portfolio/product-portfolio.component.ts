import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product-portfolio',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product-portfolio.component.html',
  styleUrl: './product-portfolio.component.scss'
})
export class ProductPortfolioComponent {
}