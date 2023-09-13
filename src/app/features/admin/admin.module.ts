import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PositionsAndSkillsComponent } from './pages/positions-and-skills/positions-and-skills.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlansComponent } from './pages/plans/plans.component';
import { InsideBarComponent } from './components/inside-bar/inside-bar.component';

@NgModule({
  declarations: [
    AdminComponent,
    PositionsAndSkillsComponent,
    PlayersComponent,
    PlansComponent,
    InsideBarComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
