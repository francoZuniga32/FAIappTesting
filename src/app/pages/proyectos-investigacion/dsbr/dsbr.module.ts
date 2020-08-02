import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DsbrPageRoutingModule } from './dsbr-routing.module';

import { DsbrPage } from './dsbr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DsbrPageRoutingModule
  ],
  declarations: [DsbrPage]
})
export class DsbrPageModule {}
