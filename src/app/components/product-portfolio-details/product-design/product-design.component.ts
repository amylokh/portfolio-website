import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface DesignDocument {
  id: string;
  title: string;
  description: string;
  fileName: string;
  embeddedUrl: SafeResourceUrl;
  downloadUrl: string;
}

@Component({
  selector: 'app-product-design',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-design.component.html',
  styleUrl: './product-design.component.scss'
})
export class ProductDesignComponent implements OnInit {
  arrowIcon = faArrowLeft;
  downloadIcon = faDownload;
  pdfIcon = faFilePdf;

  designDocument: DesignDocument;
  problems: string[] = [
    'Design an oven for a person in a wheelchair',
    'How would you improve image search?',
    'Design an educational product for YouTube',
    'Design a vending machine for hotels + Estimate the market size in your hometown',
    'Rant about organizing a child\'s 1st birthday party',
    'What is your favourite physical product? How would you improve it?',
    'How would you prevent "bad" content from being uploaded to a social media platform?',
    'Design a product for event gathering for Google',
    'Design a web search engine for children below 14 years',
    'How would you improve Grammarly?',
    'Design a library for the future',
    'Design an alarm clock for people over the age of 70',
    'Uber is facing high number of cancellations after the driver arrives near the location. Evaluate and find ways to improve.'
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.designDocument = {
      id: 'product-design-pdf',
      title: 'Product Design Practice',
      description: 'Comprehensive guide to product design and improvement problems with detailed solutions.',
      fileName: 'Product Design Practice.pdf',
      embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/product-design/Product Design Practice.pdf'),
      downloadUrl: 'assets/product-design/Product Design Practice.pdf'
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