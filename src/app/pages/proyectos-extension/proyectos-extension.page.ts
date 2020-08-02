import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proyectos-extension',
  templateUrl: './proyectos-extension.page.html',
  styleUrls: ['./proyectos-extension.page.scss'],
})
export class ProyectosExtensionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Modulos para navegar a la pagina correspondiente de la tarjeta
  gotoEscuelaMedia(): void {
    this.router.navigateByUrl('/proyectos-extension/escuela-media');
  }

  gotoAgentesRobots(): void {
    this.router.navigateByUrl('/proyectos-extension/agentes-robots');
  }

  gotoTorneoProgramacion(): void {
    this.router.navigateByUrl('/proyectos-extension/torneo-programacion');
  }

  gotoRealidadVirtual_RealidadAumentada(): void {
    this.router.navigateByUrl('/proyectos-extension/realidad-aumentada_realidad-virtual');
  }


}
