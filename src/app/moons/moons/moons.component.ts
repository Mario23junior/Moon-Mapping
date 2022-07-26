import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Moon } from '../models/moon';
import { MoonsService } from '../services/moons.service';

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.css']
})
export class MoonsComponent implements OnInit {

  private moonsService: MoonsService
  public moons$: Observable<Moon[]>
  public dialog: MatDialog


  displayedColumns = ['name', 'planetaMae', 'semieixoMaior', 'pressaoAtmosferica', 'massa',
    'periodoDeRotacao', 'periodoOrbital', 'inclinacao', 'velocidadeOrbitalMedia']

  constructor(moonsService: MoonsService, dialog: MatDialog) {
    this.moonsService = moonsService
    this.dialog = dialog
    this.moons$ = this.moonsService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar dados, por  favor tente mais tarde !')
          return of([])
        })
      )
  }


  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

}
