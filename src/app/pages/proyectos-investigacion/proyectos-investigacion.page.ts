import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-investigacion',
  templateUrl: './proyectos-investigacion.page.html',
  styleUrls: ['./proyectos-investigacion.page.scss'],
})
export class ProyectosInvestigacionPage implements OnInit {
  proyecto = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoAciis(): void {
    this.router.navigateByUrl('/proyectos-investigacion/aciis');
  }

  gotoAeyws(): void {
    this.router.navigateByUrl('/proyectos-investigacion/aeyws');
  }

  gotoAimfyae(): void {
    this.router.navigateByUrl('/proyectos-investigacion/aimfyae');
  }

  gotoCacye(): void {
    this.router.navigateByUrl('/proyectos-investigacion/cacye');
  }

  gotoCap(): void {
    this.router.navigateByUrl('/proyectos-investigacion/cap');
  }

  gotoDsbr(): void {
    this.router.navigateByUrl('/proyectos-investigacion/dsbr');
  }

  gotoIeyachysse(): void {
    this.router.navigateByUrl('/proyectos-investigacion/ieyachysse');
  }

  gotoVdyrv(): void {
    this.router.navigateByUrl('/proyectos-investigacion/vdyrv');
  }

}
