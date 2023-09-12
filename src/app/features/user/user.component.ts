import { Component, inject } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
