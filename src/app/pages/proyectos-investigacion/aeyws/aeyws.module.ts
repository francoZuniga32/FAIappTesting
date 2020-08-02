import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AeywsPageRoutingModule } from './aeyws-routing.module';

import { AeywsPage } from './aeyws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AeywsPageRoutingModule
  ],
  declarations: [AeywsPage]
})
export class AeywsPageModule {}
