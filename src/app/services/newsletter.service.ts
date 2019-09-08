import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: Http) { }

  subscribeToNewsletter(email: string) {
    return this.http.post('/api/newsletter', { email });
  }
}
