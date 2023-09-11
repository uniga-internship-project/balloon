import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    loadChildren: async () => {
      const { AuthModule } = await import('./features/auth/auth.module');
      return AuthModule;
    },
  },
  {
    path: 'user',
    canActivate: [authGuard],
    loadChildren: async () => {
      const { UserModule } = await import('./features/user/user.module');
      return UserModule;
    },
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: async () => {
      const { AdminModule } = await import('./features/admin/admin.module');
      return AdminModule;
    },
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
