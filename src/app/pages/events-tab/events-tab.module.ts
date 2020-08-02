import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsTabPageRoutingModule } from './events-tab-routing.module';

import { EventsTabPage } from './events-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsTabPageRoutingModule
  ],
  declarations: [EventsTabPage]
})
export class EventsTabPageModule {}
