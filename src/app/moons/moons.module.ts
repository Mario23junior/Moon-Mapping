import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonsRoutingModule } from './moons-routing.module';
import { MoonsComponent } from './moons/moons.component';


@NgModule({
  declarations: [
    MoonsComponent
  ],
  imports: [
    CommonModule,
    MoonsRoutingModule
  ]
})
export class MoonsModule { }
