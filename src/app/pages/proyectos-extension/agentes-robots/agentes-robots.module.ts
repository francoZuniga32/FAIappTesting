import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentesRobotsPageRoutingModule } from './agentes-robots-routing.module';

import { AgentesRobotsPage } from './agentes-robots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentesRobotsPageRoutingModule
  ],
  declarations: [AgentesRobotsPage]
})
export class AgentesRobotsPageModule {}
