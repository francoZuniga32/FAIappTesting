import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsTabPage } from './events-tab.page';

const routes: Routes = [
  {
    path: '',
    component: EventsTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsTabPageRoutingModule {}
