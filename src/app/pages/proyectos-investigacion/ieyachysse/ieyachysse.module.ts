import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IeyachyssePageRoutingModule } from './ieyachysse-routing.module';

import { IeyachyssePage } from './ieyachysse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IeyachyssePageRoutingModule
  ],
  declarations: [IeyachyssePage]
})
export class IeyachyssePageModule {}
