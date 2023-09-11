import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MainComponent } from './pages/main/main.component';
import { BuyAndSellComponent } from './pages/buy-and-sell/buy-and-sell.component';
import { ManageComponent } from './pages/manage/manage.component';
import { StatusComponent } from './pages/status/status.component';


@NgModule({
  declarations: [
    UserComponent,
    MainComponent,
    BuyAndSellComponent,
    ManageComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
