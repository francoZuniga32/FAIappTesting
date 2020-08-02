import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AimfyaePageRoutingModule } from './aimfyae-routing.module';

import { AimfyaePage } from './aimfyae.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AimfyaePageRoutingModule
  ],
  declarations: [AimfyaePage]
})
export class AimfyaePageModule {}
