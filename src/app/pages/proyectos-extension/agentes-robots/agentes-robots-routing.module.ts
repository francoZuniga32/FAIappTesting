import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentesRobotsPage } from './agentes-robots.page';

const routes: Routes = [
  {
    path: '',
    component: AgentesRobotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentesRobotsPageRoutingModule {}
