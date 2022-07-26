import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonsRoutingModule } from './moons-routing.module';
import { MoonsComponent } from './moons/moons.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MoonsComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MoonsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MoonsModule { }
