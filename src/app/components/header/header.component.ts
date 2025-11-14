import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { headerAnimation, navItemAnimation, slideDown } from '../../animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [headerAnimation, navItemAnimation, slideDown],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen = false;
  navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#product-portfolio', label: 'Product Portfolio' },
    { href: '#interview-resources', label: 'Interview Resources' },
    { href: '#contact', label: 'Contact' }
  ];

  navigateHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
