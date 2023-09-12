import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const isLoggedIn = authService.isLoggedIn();

  if (isLoggedIn) {
    authService.navigateBasedOnRole();
    return false;
  }

  return true;
};
