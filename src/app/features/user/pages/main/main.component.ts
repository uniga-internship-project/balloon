import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  selectedNavItem: string = '';

  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
