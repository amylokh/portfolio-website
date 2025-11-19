import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCalculator, faPalette, faChartBar, faBook } from '@fortawesome/free-solid-svg-icons';

interface PortfolioCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  route: string;
}

@Component({
  selector: 'app-product-portfolio-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-portfolio-details.component.html',
  styleUrl: './product-portfolio-details.component.scss'
})
export class ProductPortfolioDetailsComponent {
  arrowIcon = faArrowLeft;

  portfolioCards: PortfolioCard[] = [
    {
      id: 'guesstimates',
      title: 'Guesstimate',
      description: 'Explore estimation problems and techniques used in product management to make data-driven decisions.',
      icon: faCalculator,
      route: '/product-portfolio-details/guesstimates'
    },
    {
      id: 'product-design',
      title: 'Product Design',
      description: 'Dive into product design problems, user experience considerations, and design thinking methodologies.',
      icon: faPalette,
      route: '/under-construction'
    },
    {
      id: 'product-metrics',
      title: 'Product Metrics',
      description: 'Learn about key metrics, analytics, and measurement strategies that drive product success.',
      icon: faChartBar,
      route: '/product-portfolio-details/product-metrics'
    },
    {
      id: 'product-strategy',
      title: 'Product Strategy',
      description: 'Understand strategic frameworks, market analysis, and long-term product vision planning.',
      icon: faBook,
      route: '/under-construction'
    },
    {
      id: 'favorite-books',
      title: 'My Favorite Books',
      description: 'Discover the books that shaped my understanding of product management and business strategy.',
      icon: faBook,
      route: '/under-construction'
    }
  ];
}