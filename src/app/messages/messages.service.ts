import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  createMessage(form: object) {
    return this.http.post('/api/messages', form, { withCredentials: true });
  }

  listMessages(params = {}) {
    return this.http.post('/api/messages/list', params, {
      withCredentials: true,
    });
  }

  getMostRecentMessages() {
    return this.http.get('/api/messages/mostRecent', {
      withCredentials: true,
    });
  }
}
