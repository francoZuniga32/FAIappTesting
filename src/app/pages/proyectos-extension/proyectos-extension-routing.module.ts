import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosExtensionPage } from './proyectos-extension.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectosExtensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosExtensionPageRoutingModule {}
