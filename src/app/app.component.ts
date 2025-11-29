import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    ChatbotComponent
  ],
  template: `
    <div class="min-h-screen bg-[#f9fafb]">
      <app-header></app-header>
      <main class="container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </main>
      <app-chatbot class="floating-chatbot"></app-chatbot>
    </div>
  `,
  styles: [`
    :host ::ng-deep .floating-chatbot {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
    }
  `]
})
export class AppComponent {}