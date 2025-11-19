import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface StrategyDocument {
  id: string;
  title: string;
  description: string;
  fileName: string;
  embeddedUrl: SafeResourceUrl;
  downloadUrl: string;
}

@Component({
  selector: 'app-product-strategy',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-strategy.component.html',
  styleUrl: './product-strategy.component.scss'
})
export class ProductStrategyComponent implements OnInit {
  arrowIcon = faArrowLeft;
  downloadIcon = faDownload;
  pdfIcon = faFilePdf;

  strategyDocument: StrategyDocument;
  problems: string[] = [
    'Describe the strategy behind Google entering the cell phone market',
    'Amazon has ads on its website for products you can buy on other websites — what is the strategy? Is it a good idea?',
    'Why is Google Trusted Stores strategically important for the company?',
    'Should Google enter the online furniture-selling market?',
    'How would you increase YouTube revenue by 3X?',
    'Imagine you are a PM for Google Search — how would you grow this product?',
    'How would you grow Zomato Gold subscriptions by 5X in the next 3 years?',
    'Improve monetization for Google Gemini',
    'Meta wants to enter the podcast space — should it enter or not? How should it enter?',
    'Should Amazon enter the smartphone business?',
    'Should Google enter the gas station business?',
    'How would you grow the number of Instagram users?',
    'How would you increase Gmail ads revenue by 20%?',
    'Grow the number of LinkedIn users by 2X over the next six months',
    'Lyft wants to enter the Indian market — what should be the strategy?',
    'How would you make Google Keep a subscription product and monetize it?',
    'How would you monetize WhatsApp?',
    'What is your favorite physical product? Design it with tech and create a launch strategy',
    'Imagine you are the head of YouTube — what would you change immediately? What products would you introduce?',
    'Amazon wants to enter the e-learning market — what should be the strategy?',
    'How would you grow Netflix revenue by 2X in the next 4 years?',
    'How would you monetize Wikipedia?',
    'Imagine I\'m a VC giving you $20M — walk me through how you\'d build any tech-enabled product/service (Problem, Solution, User, Monetization, TAM)',
    'Should Ola enter the food delivery business?'
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.strategyDocument = {
      id: 'product-strategy-pdf',
      title: 'Strategy Questions',
      description: 'Comprehensive guide to product strategy problems with detailed analysis and solutions.',
      fileName: 'Strategy Questions.pdf',
      embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/product-strategy/Strategy Questions.pdf'),
      downloadUrl: 'assets/product-strategy/Strategy Questions.pdf'
    };
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  downloadDocument(url: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
  }
}