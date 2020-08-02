import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuelaMediaPageRoutingModule } from './escuela-media-routing.module';

import { EscuelaMediaPage } from './escuela-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelaMediaPageRoutingModule
  ],
  declarations: [EscuelaMediaPage]
})
export class EscuelaMediaPageModule {}
