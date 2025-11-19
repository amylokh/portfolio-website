import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faDownload, faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Document {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileType: 'excel' | 'pdf';
  embeddedUrl?: SafeResourceUrl;
  downloadUrl: string;
  problems?: string[];
}

@Component({
  selector: 'app-guesstimates',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './guesstimates.component.html',
  styleUrl: './guesstimates.component.scss'
})
export class GuessestimatesComponent implements OnInit {
  arrowIcon = faArrowLeft;
  downloadIcon = faDownload;
  excelIcon = faFileExcel;
  pdfIcon = faFilePdf;

  excelSheets: Document[];
  pdfDocuments: Document[];

  constructor(private sanitizer: DomSanitizer) {
    this.excelSheets = [
      {
        id: 'excel-1',
        title: 'Guesstimate Problems - Set 1',
        description: 'A collection of solved guesstimate problems covering market sizing, revenue estimations, and growth calculations.',
        fileName: 'guesstimate-problems-set-1.xlsx',
        fileType: 'excel',
        downloadUrl: 'assets/guesstimate-documents/guesstimate-problems-set-1.xlsx',
        problems: [
          '# of iPhones sold',
          'Revenue from TVs sold',
          'PVR Revenue',
          'Monthly Soaps Purchased in India',
          'Yearly income of an avg B-School graduate'
        ]
      },
      {
        id: 'excel-2',
        title: 'Guesstimate Problems - Set 2',
        description: 'Advanced guesstimate problems with detailed solutions and calculation methodologies.',
        fileName: 'guesstimate-problems-set-2.xlsx',
        fileType: 'excel',
        downloadUrl: 'assets/guesstimate-documents/guesstimate-problems-set-2.xlsx',
        problems: [
          '# of flights operating from Mumbai airport',
          'Market size of Washing Machines',
          '# of cash counters at DMart',
          '# of YouTube videos watched',
          '# of restaurants in Bangalore',
          '# of shampoo bottles sold'
        ]
      }
    ];

    this.pdfDocuments = [
      {
        id: 'pdf-1',
        title: 'Guesstimate Framework & Cheatsheet',
        description: 'Quick reference guide with essential frameworks, formulas, and tips for solving guesstimate problems.',
        fileName: 'guesstimate-cheatsheet.pdf',
        fileType: 'pdf',
        embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/guesstimate-documents/guesstimate-cheatsheet.pdf'),
        downloadUrl: 'assets/guesstimate-documents/guesstimate-cheatsheet.pdf'
      },
      {
        id: 'pdf-2',
        title: 'Market Sizing Reference Guide',
        description: 'Comprehensive reference document for market sizing techniques and industry benchmarks.',
        fileName: 'market-sizing-reference.pdf',
        fileType: 'pdf',
        embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/guesstimate-documents/market-sizing-reference.pdf'),
        downloadUrl: 'assets/guesstimate-documents/market-sizing-reference.pdf'
      }
    ];
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