import { Component, inject } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  email: string = '';
  password: string = '';

  login() {
    this.authService.login(this.email, this.password);
  }
}
