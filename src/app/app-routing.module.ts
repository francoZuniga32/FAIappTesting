import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'carreras',
    loadChildren: () =>
      import('./pages/carreras/carreras.module').then( m => m.CarrerasPageModule)
  },
  {
    path: 'materias',
    loadChildren: () =>
      import('./pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'proyectos-extension',
    loadChildren: () =>
      import('./pages/proyectos-extension/proyectos-extension.module').then( m => m.ProyectosExtensionPageModule)
  },
  {
    path: 'proyectos-extension/escuela-media',
    loadChildren: () =>
      import('./pages/proyectos-extension/escuela-media/escuela-media.module').then( m => m.EscuelaMediaPageModule)
  },
  {
    path: 'proyectos-extension/realidad-aumentada_realidad-virtual',
    loadChildren: () =>
      import('./pages/proyectos-extension/arvr/arvr.module').then( m => m.ArvrPageModule)
  },
  {
    path: 'proyectos-extension/torneo-programacion',
    // tslint:disable-next-line: max-line-length
    loadChildren: () =>
      import('./pages/proyectos-extension/torneo-programacion/torneo-programacion.module').then( m => m.TorneoProgramacionPageModule)
  },
  {
    path: 'proyectos-extension/agentes-robots',
    loadChildren: () =>
      import('./pages/proyectos-extension/agentes-robots/agentes-robots.module').then( m => m.AgentesRobotsPageModule)
  },
  {
    path: 'proyectos-investigacion',
    loadChildren: () =>
      import ('./pages/proyectos-investigacion/proyectos-investigacion.module').then( m => m.ProyectosInvestigacionPageModule)
  },
  {
    path: 'proyectos-investigacion/aciis',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/aciis/aciis.module').then( m => m.AciisPageModule)
  },
  {
    path: 'proyectos-investigacion/aeyws',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/aeyws/aeyws.module').then( m => m.AeywsPageModule)
  },
  {
    path: 'proyectos-investigacion/aimfyae',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/aimfyae/aimfyae.module').then( m => m.AimfyaePageModule)
  },
  {
    path: 'proyectos-investigacion/cacye',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/cacye/cacye.module').then( m => m.CacyePageModule)
  },
  {
    path: 'proyectos-investigacion/cap',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/cap/cap.module').then( m => m.CapPageModule)
  },
  {
    path: 'proyectos-investigacion/dsbr',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/dsbr/dsbr.module').then( m => m.DsbrPageModule)
  },
  {
    path: 'proyectos-investigacion/ieyachysse',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/ieyachysse/ieyachysse.module').then( m => m.IeyachyssePageModule)
  },
  {
    path: 'vdyrv',
    loadChildren: () =>
      import('./pages/proyectos-investigacion/vdyrv/vdyrv.module').then( m => m.VdyrvPageModule)
  },
  {
    path: 'horarios',
    loadChildren: () =>
      import('./pages/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () =>
      import('./pages/acerca/acerca.module').then( m => m.AcercaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
