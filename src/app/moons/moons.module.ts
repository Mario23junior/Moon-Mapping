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
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MoonsUpdateComponent } from './moons-update/moons-update.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MoonsDeleteComponent } from './moons-delete/moons-delete.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MoonsDetailsComponent } from './moons-details/moons-details.component';


@NgModule({
  declarations: [
    MoonsComponent,
    ErrorDialogComponent,
    PlanetsPipe,
    MoonsFormComponent,
    MoonsUpdateComponent,
    MoonsDeleteComponent,
    MoonsDetailsComponent
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
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatPaginatorModule
  ]
})
export class MoonsModule { }
