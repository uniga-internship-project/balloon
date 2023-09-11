import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { BuyAndSellComponent } from './pages/buy-and-sell/buy-and-sell.component';
import { ManageComponent } from './pages/manage/manage.component';
import { StatusComponent } from './pages/status/status.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'buy-and-sell',
        component: BuyAndSellComponent,
      },
      {
        path: 'manage',
        component: ManageComponent,
      },
      {
        path: 'status',
        component: StatusComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
