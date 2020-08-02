import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectosInvestigacionPageRoutingModule } from './proyectos-investigacion-routing.module';

import { ProyectosInvestigacionPage } from './proyectos-investigacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectosInvestigacionPageRoutingModule
  ],
  declarations: [ProyectosInvestigacionPage]
})
export class ProyectosInvestigacionPageModule {}
