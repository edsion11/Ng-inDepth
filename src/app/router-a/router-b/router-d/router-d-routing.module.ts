import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RouterDComponent} from './router-d.component';

const routes: Routes = [
  {
    path: '',
    component: RouterDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterDRoutingModule { }
