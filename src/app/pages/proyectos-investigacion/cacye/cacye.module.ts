import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CacyePageRoutingModule } from './cacye-routing.module';

import { CacyePage } from './cacye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CacyePageRoutingModule
  ],
  declarations: [CacyePage]
})
export class CacyePageModule {}
