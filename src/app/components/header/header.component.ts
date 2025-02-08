import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { headerAnimation, navItemAnimation, slideDown } from '../../animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  animations: [headerAnimation, navItemAnimation, slideDown],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen = false;
  navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
