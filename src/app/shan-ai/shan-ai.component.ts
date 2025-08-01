import { Component } from '@angular/core';
import { ShanAiService } from '../services/shan-ai.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-shan-ai',
  standalone: false,
  templateUrl: './shan-ai.component.html',
  styleUrl: './shan-ai.component.scss'
})
export class ShanAi {
isOpen = false;
  userMessage = '';
  messages: { sender: 'user' | 'bot', text: string }[] = [];

  constructor(private shanAi: ShanAiService,
    private viewportScroller: ViewportScroller
   ) {}

  scrollToSection(sectionId: string) {
    this.toggleChat(); // Optional: close chat on click
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(sectionId);
    }, 300);
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    const msg = this.userMessage.trim();
    if (!msg) return;

    this.messages.push({ sender: 'user', text: msg });
    this.userMessage = '';

    this.shanAi.askQuestion(msg).subscribe({
      next: (res) => {
        this.messages.push({ sender: 'bot', text: res.response });

        
        if (res.category) {
          const sectionId = res.category;
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' }); //scroll to section feature
        }
      },
      error: () => {
        this.messages.push({ sender: 'bot', text: '⚠️ Error contacting the AI.' });
      }
    });
  }

  setSuggested(msg: string) {
    this.userMessage = msg;
    this.sendMessage();
  }
}
