import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ShanAiResponse {
  response: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ShanAiService {
  private API_URL = 'https://sudharshan-portfolio-backend.onrender.com/ask';

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<ShanAiResponse> {
    return this.http.post<ShanAiResponse>(this.API_URL, {
      question: question
    });
  }
}
