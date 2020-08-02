import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorneoProgramacionPage } from './torneo-programacion.page';

const routes: Routes = [
  {
    path: '',
    component: TorneoProgramacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorneoProgramacionPageRoutingModule {}
