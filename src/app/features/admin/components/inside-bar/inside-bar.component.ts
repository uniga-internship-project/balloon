import { Component, inject } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inside-bar',
  templateUrl: './inside-bar.component.html',
  styleUrls: ['./inside-bar.component.scss'],
})
export class InsideBarComponent {
  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
