import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArvrPage } from './arvr.page';

const routes: Routes = [
  {
    path: '',
    component: ArvrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArvrPageRoutingModule {}
