import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IeyachyssePage } from './ieyachysse.page';

const routes: Routes = [
  {
    path: '',
    component: IeyachyssePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IeyachyssePageRoutingModule {}
