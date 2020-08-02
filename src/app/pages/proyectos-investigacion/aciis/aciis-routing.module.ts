import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AciisPage } from './aciis.page';

const routes: Routes = [
  {
    path: '',
    component: AciisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AciisPageRoutingModule {}
