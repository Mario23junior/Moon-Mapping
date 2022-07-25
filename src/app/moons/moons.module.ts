import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonsRoutingModule } from './moons-routing.module';
import { MoonsComponent } from './moons/moons.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MoonsComponent
  ],
  imports: [
    CommonModule,
    MoonsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MoonsModule { }
