import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MetricsDocument {
  id: string;
  title: string;
  description: string;
  fileName: string;
  embeddedUrl: SafeResourceUrl;
  downloadUrl: string;
}

@Component({
  selector: 'app-product-metrics',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-metrics.component.html',
  styleUrl: './product-metrics.component.scss'
})
export class ProductMetricsComponent implements OnInit {
  arrowIcon = faArrowLeft;
  downloadIcon = faDownload;
  pdfIcon = faFilePdf;
  metricsDocument: MetricsDocument;
  products: string[] = [
    'Google Calendar',
    'Google Chrome',
    'Google Docs',
    'Google Drive',
    'Gmail',
    'Google Search',
    'Google Pay',
    'Google Maps',
    'YouTube',
    'YouTube Music',
    'Google Photos',
    'Google Keep Notes',
    'Google Assistant',
    'Gemini',
    'Google Play Store',
    'Google Meet'
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.metricsDocument = {
      id: 'google-metrics-pdf',
      title: 'Google Products - North Star Metric',
      description: 'Comprehensive guide to North Star Metrics and product goals for prominent Google products.',
      fileName: 'Google Products - North Star Metric.pdf',
      embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/product-metrics/Google Products - North Star Metric.pdf'),
      downloadUrl: 'assets/product-metrics/Google Products - North Star Metric.pdf'
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