import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorneoProgramacionPageRoutingModule } from './torneo-programacion-routing.module';

import { TorneoProgramacionPage } from './torneo-programacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorneoProgramacionPageRoutingModule
  ],
  declarations: [TorneoProgramacionPage]
})
export class TorneoProgramacionPageModule {}
