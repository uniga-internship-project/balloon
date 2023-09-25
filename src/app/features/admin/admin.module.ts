import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PositionsAndSkillsComponent } from './pages/positions-and-skills/positions-and-skills.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlansComponent } from './pages/plans/plans.component';
import { InsideBarComponent } from './components/inside-bar/inside-bar.component';
import { CreatePositionModalComponent } from './components/create-position-modal/create-position-modal.component';
import { EditPositionModalComponent } from './components/edit-position-modal/edit-position-modal.component';
import { CreateSkillModalComponent } from './components/create-skill-modal/create-skill-modal.component';
import { EditSkillModalComponent } from './components/edit-skill-modal/edit-skill-modal.component';

@NgModule({
  declarations: [
    AdminComponent,
    PositionsAndSkillsComponent,
    PlayersComponent,
    PlansComponent,
    InsideBarComponent,
    CreatePositionModalComponent,
    EditPositionModalComponent,
    CreateSkillModalComponent,
    EditSkillModalComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
