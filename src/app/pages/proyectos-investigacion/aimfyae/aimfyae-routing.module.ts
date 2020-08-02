import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AimfyaePage } from './aimfyae.page';

const routes: Routes = [
  {
    path: '',
    component: AimfyaePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AimfyaePageRoutingModule {}
