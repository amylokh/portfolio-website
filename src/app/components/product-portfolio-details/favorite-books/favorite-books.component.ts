import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faDownload, faBook } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface BookDocument {
  id: string;
  title: string;
  author: string;
  description: string;
  fileName: string;
  embeddedUrl: SafeResourceUrl;
  downloadUrl: string;
}

@Component({
  selector: 'app-favorite-books',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './favorite-books.component.html',
  styleUrl: './favorite-books.component.scss'
})
export class FavoriteBooksComponent implements OnInit {
  arrowIcon = faArrowLeft;
  downloadIcon = faDownload;
  bookIcon = faBook;

  books: BookDocument[];

  constructor(private sanitizer: DomSanitizer) {
    this.books = [
      {
        id: 'pm-interview',
        title: 'The Product Manager Interview',
        author: 'Lewis C. Lin',
        description: 'A comprehensive guide to acing product manager interviews with real questions, frameworks, and detailed solutions.',
        fileName: 'The Product Manager Interview.pdf',
        embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/favorite-books/The Product Manager Interview.pdf'),
        downloadUrl: 'assets/favorite-books/The Product Manager Interview.pdf'
      },
      {
        id: 'cracking-pm',
        title: 'Cracking the PM Interview',
        author: 'McDowell & Bavaro',
        description: 'An essential resource for aspiring PMs covering product sense, analytics, and behavioral questions with proven strategies.',
        fileName: 'Cracking the PM Interview.pdf',
        embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/favorite-books/Cracking the PM Interview.pdf'),
        downloadUrl: 'assets/favorite-books/Cracking the PM Interview.pdf'
      },
      {
        id: 'decode-conquer',
        title: 'Decode and Conquer',
        author: 'Lewis C. Lin',
        description: 'A practical guide to answering product management interview questions with frameworks and real-world examples.',
        fileName: 'Decode and Conquer.pdf',
        embeddedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('assets/favorite-books/Decode and Conquer.pdf'),
        downloadUrl: 'assets/favorite-books/Decode and Conquer.pdf'
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