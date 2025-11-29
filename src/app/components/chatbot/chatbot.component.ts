import { AfterViewInit, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ChatbotService } from '../../services/chatbot.service';
import { TypingEffectDirective } from './typing-effect.directive';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, TypingEffectDirective, FontAwesomeModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})

export class ChatbotComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('messagesContainer') messagesContainer!: ElementRef;
    private popupTimeout: any;
    
    ngAfterViewInit(): void {
      this.scrollToBottom();
    }
  messages: { role: string; content: string }[] = [];
  userInput: string = '';
  isLoading: boolean = false;
  collapsed: boolean = true;
  faPaperPlane = faPaperPlane;

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.messages.push({
      role: 'bot',
      content: 'Hi! I\'m Amey\'s AI assistant. Ask me anything about his career, skills, or portfolio!'
    });
    
    // Auto-popup after 3 seconds
    this.popupTimeout = setTimeout(() => {
      this.collapsed = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.popupTimeout) {
      clearTimeout(this.popupTimeout);
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }

  isLastBotMessage(msg: { role: string; content: string }): boolean {
    if (msg.role !== 'bot') return false;
    // Find the last bot message in the array
    for (let i = this.messages.length - 1; i >= 0; i--) {
      if (this.messages[i].role === 'bot') {
        return this.messages[i] === msg;
      }
    }
    return false;
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'user', content: this.userInput });
    this.isLoading = true;
    this.scrollToBottom();

    this.chatbotService.sendMessage(this.userInput).subscribe({
      next: (response) => {
        this.messages.push({ role: 'bot', content: response.reply });
        this.userInput = '';
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: () => {
        this.messages.push({ role: 'bot', content: 'Sorry, I couldn\'t process that. Please try again.' });
        this.isLoading = false;
        this.scrollToBottom();
      }
    });
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    }, 50);
  }
}