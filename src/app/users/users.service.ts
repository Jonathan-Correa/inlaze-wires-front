import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/user';

interface IsLoggedIn {
  user: User;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  public userData: User;

  signup(form: any) {
    return this.http.post('/api/auth/signup', form, { withCredentials: true });
  }

  signin(form: any) {
    const body = JSON.stringify(form);

    return this.http.post('/api/auth/signin', body, {
      withCredentials: true,
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    });
  }

  getUserData(): Observable<IsLoggedIn> {
    return this.http.get<IsLoggedIn>('/api/auth/getUserData', {
      withCredentials: true,
    });
  }

  logout() {
    return this.http.get('api/auth/logout', { withCredentials: true });
  }
}
