import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosInvestigacionPage } from './proyectos-investigacion.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectosInvestigacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosInvestigacionPageRoutingModule {}
