import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Moon } from '../models/moon';
import { MoonsDetailsComponent } from '../moons-details/moons-details.component';
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
  private router: Router
  private route: ActivatedRoute


  displayedColumns = ['name', 'planetaMae', 'semieixoMaior', 'pressaoAtmosferica', 'massa',
    'periodoDeRotacao', 'periodoOrbital', 'inclinacao', 'velocidadeOrbitalMedia', 'actions']

  constructor(moonsService: MoonsService, dialog: MatDialog, router: Router, route: ActivatedRoute) {
    this.moonsService = moonsService
    this.dialog = dialog
    this.router = router
    this.route = route
    this.moons$ = this.moonsService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar dados, por  favor tente mais tarde !')
          return of([])
        })
      )
  }

  public onAdd() {
    this.router.navigate(['moons-add'], { relativeTo: this.route })
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  public fontRaiz() {
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

   public showDetails(moons: Moon) {
     this.dialog.open(MoonsDetailsComponent, {
       width: '600px',
       height: '450px',
       data: moons
     })
   }

}
