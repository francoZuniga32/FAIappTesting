import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectosExtensionPageRoutingModule } from './proyectos-extension-routing.module';

import { ProyectosExtensionPage } from './proyectos-extension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectosExtensionPageRoutingModule
  ],
  declarations: [ProyectosExtensionPage]
})
export class ProyectosExtensionPageModule {}
