import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Major } from './carreras';

interface Slate {
  majorId: string;
  yearNumber: number;
  quarterNumber: number;
  courseIds: string[];
}
@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.page.html',
  styleUrls: ['./carreras.page.scss'],
})
export class CarrerasPage {

  carreras: Major;

  constructor(
    public menu: MenuController,
    public router: Router,
    public navContrller: NavController,
  ) { }


}



