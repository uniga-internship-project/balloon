import { Component, EventEmitter, Output, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inside-bar-user',
  templateUrl: './inside-bar-user.component.html',
  styleUrls: ['./inside-bar-user.component.scss']
})
export class InsideBarUserComponent {
  @Output() navItemClicked: EventEmitter<string> = new EventEmitter<string>();

  selectedNavItem: string = '';
  isActiveStep: boolean = false;
  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
  
  toggleselectedOption(text: string): void {
      this.selectedNavItem = text;
      this.navItemClicked.emit(this.selectedNavItem);
  }
  

}
