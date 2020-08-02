import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AeywsPage } from './aeyws.page';

const routes: Routes = [
  {
    path: '',
    component: AeywsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AeywsPageRoutingModule {}
