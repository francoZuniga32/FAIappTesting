import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule)
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../events-tab/events-tab.module').then(m => m.EventsTabPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notifications-tab/notifications-tab.module').then(m => m.NotificationsTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
