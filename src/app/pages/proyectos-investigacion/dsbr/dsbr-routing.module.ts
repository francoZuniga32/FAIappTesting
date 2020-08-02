import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DsbrPage } from './dsbr.page';

const routes: Routes = [
  {
    path: '',
    component: DsbrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DsbrPageRoutingModule {}
