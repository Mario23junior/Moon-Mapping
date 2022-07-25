import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonsRoutingModule } from './moons-routing.module';
import { MoonsComponent } from './moons/moons.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MoonsComponent
  ],
  imports: [
    CommonModule,
    MoonsRoutingModule,
    MatTableModule
  ]
})
export class MoonsModule { }
