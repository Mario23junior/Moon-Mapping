import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Moon } from '../models/moon';
import { MoonsService } from '../services/moons.service';

@Component({
  selector: 'app-moons-delete',
  templateUrl: './moons-delete.component.html',
  styleUrls: ['./moons-delete.component.css']
})
export class MoonsDeleteComponent implements OnInit {

  public form: FormGroup
  public router: Router
  public service: MoonsService
  private snackBar: MatSnackBar
   private route: ActivatedRoute
  public moons: any = [] = []

  constructor(public formBuild: FormBuilder, router: Router,
    service: MoonsService, snackBar: MatSnackBar, route: ActivatedRoute) {

    this.router = router
    this.route = route
    this.snackBar = snackBar
     this.service = service
    this.form = this.formBuild.group({
      _id: { value: null, disabled: true },
      name: {value:null ,disabled:true},
      planetaMae: {value:null ,disabled:true},
      semieixoMaior: {value:null ,disabled:true},
      pressaoAtmosferica: {value:null ,disabled:true},
      massa: {value:null ,disabled:true},
      periodoDeRotacao: {value:null ,disabled:true},
      periodoOrbital: {value:null ,disabled:true},
      inclinacao: {value:null ,disabled:true},
      velocidadeOrbitalMedia: {value:null ,disabled:true},
    })
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(moons => {
      this.moons = moons
    })
  }

  public onDelete() {
    this.service.delete(this.moons.id)
      .subscribe(result => this.onSuccess(this.moons.name),
        error => this.onError());
  }

  public onCancel() {
    this.router.navigate([''])
  }

  private onError() {
    this.snackBar.open('Erro ao atualizar informações de satelites naturais',
      '', {
      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-warn']
    })
  }


  private onSuccess(moonsName: Moon) {
    this.snackBar.open(`O satelite natural ${moonsName} foi deletado com sucesso`,
      '', {
      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['success'],
    })
    this.router.navigate([''])

  }

}
