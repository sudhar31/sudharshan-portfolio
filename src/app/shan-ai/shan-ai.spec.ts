import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanAi } from './shan-ai.component';
import { ChangeDetectorRef } from '@angular/core';
export class ShanAiComponent {
isOpen = false;
  userMessage = '';
  messages: { sender: 'user' | 'bot', text: string }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  setSuggested(text: string) {
    this.userMessage = text;
    this.sendMessage();
  }

  async sendMessage() {
    const message = this.userMessage.trim();
    if (!message) return;

    // Add user message
    this.messages.push({ sender: 'user', text: message });
    this.userMessage = '';
    this.cdr.detectChanges();  // ✅ Force update after user message

    try {
      const res = await fetch('http://127.0.0.1:5000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: message })
      });

      const data = await res.json();
      const reply = data.response || "I'm not sure how to respond to that.";

      // Add bot reply
      this.messages.push({ sender: 'bot', text: reply });
      this.cdr.detectChanges();  // ✅ Force update after bot message
    } catch (err) {
      this.messages.push({ sender: 'bot', text: '⚠️ Failed to get response. Please try again.' });
      this.cdr.detectChanges();
    }
  }
}