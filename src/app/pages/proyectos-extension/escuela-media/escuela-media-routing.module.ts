import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuelaMediaPage } from './escuela-media.page';

const routes: Routes = [
  {
    path: '',
    component: EscuelaMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuelaMediaPageRoutingModule {}
