import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterDComponent} from './router-d.component';
import {RouterDRoutingModule} from './router-d-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterDRoutingModule
  ],
  declarations: [RouterDComponent]
})
export class RouterDModule { }
