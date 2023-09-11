import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { PositionsAndSkillsComponent } from './pages/positions-and-skills/positions-and-skills.component';
import { PlayersComponent } from './pages/players/players.component';
import { PlansComponent } from './pages/plans/plans.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'positions-and-skills',
        component: PositionsAndSkillsComponent,
      },
      {
        path: 'players',
        component: PlayersComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
      {
        path: '**',
        redirectTo: 'positions-and-skills',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
