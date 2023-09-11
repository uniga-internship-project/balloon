import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  login(email: string, password: string) {
    localStorage.setItem('userId', '1');
    this.router.navigate(['/admin']);
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/auth']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('userId');
  }
}
