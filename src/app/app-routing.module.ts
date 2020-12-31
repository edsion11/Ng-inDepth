import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterAComponent} from './router-a/router-a.component';
import {RouterBComponent} from './router-a/router-b/router-b.component';
import {RouterCComponent} from './router-c/router-c.component';
import {RouterDComponent} from './router-a/router-b/router-d/router-d.component';

const routes: Routes = [
  {
    path: 'A',
    component: RouterAComponent,
    children: [
      {
        path: 'B',
        component: RouterBComponent,
        children: [
          {
            path: 'D',
            component: RouterDComponent,
            loadChildren: () => import('./router-a/router-b/router-d/router-d.module').then(e => e.RouterDModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/A',
    pathMatch: 'full'
  },
  {
    path: 'C',
    component: RouterCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
