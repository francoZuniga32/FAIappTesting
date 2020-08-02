import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VdyrvPageRoutingModule } from './vdyrv-routing.module';

import { VdyrvPage } from './vdyrv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VdyrvPageRoutingModule
  ],
  declarations: [VdyrvPage]
})
export class VdyrvPageModule {}
