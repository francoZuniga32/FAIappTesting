import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CacyePage } from './cacye.page';

const routes: Routes = [
  {
    path: '',
    component: CacyePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CacyePageRoutingModule {}
