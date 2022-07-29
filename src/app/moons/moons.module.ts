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
import { MatIconModule } from '@angular/material/icon';
import { PlanetsPipe } from './pipes/planets.pipe';
import { MoonsFormComponent } from './moons-form/moons-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 


@NgModule({
  declarations: [
    MoonsComponent,
    ErrorDialogComponent,
    PlanetsPipe,
    MoonsFormComponent
  ],
  imports: [
    CommonModule,
    MoonsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MoonsModule { }
