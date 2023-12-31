import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { role } from '../constants/role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  login(email: string, password: string) {

    const isAdminCredentials = email === 'admin@admin.com' && password === 'adminpassword';
    const isUserCredentials = email === 'user@user.com' && password === 'userpassword';

    if (isAdminCredentials) {
      const userId = 1;
      const roleId = role.admin;
      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('roleId', roleId.toString());
      this.navigateBasedOnRole();
    } else if (isUserCredentials) {
      const userId = 2;
      const roleId = role.user;
      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('roleId', roleId.toString());
      this.navigateBasedOnRole();
    } else {
      alert('Invalid email or password');
    }
  }


  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('roleId');
    this.router.navigate(['/auth']);
  }

  getRoleId() {
    return parseInt(localStorage.getItem('roleId')!);
  }

  navigateBasedOnRole() {
    const roleId = this.getRoleId();
    this.router.navigate([`/${roleId === role.admin ? 'admin' : 'user'}`]);
  }

  isLoggedIn() {
    return !!localStorage.getItem('userId') && !!localStorage.getItem('roleId');
  }
}
