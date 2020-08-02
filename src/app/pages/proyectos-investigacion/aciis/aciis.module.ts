import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AciisPageRoutingModule } from './aciis-routing.module';

import { AciisPage } from './aciis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AciisPageRoutingModule
  ],
  declarations: [AciisPage]
})
export class AciisPageModule {}
