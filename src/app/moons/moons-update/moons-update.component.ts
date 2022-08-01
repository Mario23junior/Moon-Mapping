import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Moon } from '../models/moon';
import { MoonsService } from '../services/moons.service';

@Component({
  selector: 'app-moons-update',
  templateUrl: './moons-update.component.html',
  styleUrls: ['./moons-update.component.css']
})
export class MoonsUpdateComponent implements OnInit {

  public form: FormGroup
  public router: Router
  public service: MoonsService
  private snackBar: MatSnackBar
  private location: Location
  private route: ActivatedRoute
  public moons: any = [] = []

  constructor(public formBuild: FormBuilder, router: Router,
    service: MoonsService,snackBar: MatSnackBar, location: Location, route: ActivatedRoute) {

    this.router = router
    this.route = route
    this.snackBar = snackBar
    this.location = location
    this.service = service
    this.form = this.formBuild.group({
      _id: { value:null, disabled:true},
      name: [''],
      planetaMae: [''],
      semieixoMaior: [],
      pressaoAtmosferica: [''],
      massa: [''],
      periodoDeRotacao: [''],
      periodoOrbital: [''],
      inclinacao: [''],
      velocidadeOrbitalMedia: ['']
    })
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(moons => {
      this.moons = moons
    })
  }

  public onUpdate() {
    this.service.update(this.moons)
      .subscribe(result => this.onSuccess(this.form.value.name),
        error => this.onError());
        this.router.navigate([''])
      }

  public onCancel() {
    this.router.navigate([''])
  }

  private onError() {
    this.snackBar.open('Erro ao atualizar os dados de satelites naturais',
      '', {
      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-warn']
    })
  }


  private onSuccess(moonsName: Moon) {
    this.snackBar.open(`O satelite natural ${moonsName} foi atualizado com sucesso`,
      '', {
      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['success'],
    })
    this.router.navigate([''])
  }
}
