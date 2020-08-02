import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VdyrvPage } from './vdyrv.page';

const routes: Routes = [
  {
    path: '',
    component: VdyrvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VdyrvPageRoutingModule {}
