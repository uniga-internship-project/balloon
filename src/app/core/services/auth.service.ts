import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    localStorage.setItem('userId', '1');
  }

  logout() {
    localStorage.removeItem('userId');
  }

  isLoggedIn() {
    return !!localStorage.getItem('userId');
  }
}
