import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Moon } from '../models/moon';
import { MoonsService } from '../services/moons.service';

@Component({
  selector: 'app-moons-form',
  templateUrl: './moons-form.component.html',
  styleUrls: ['./moons-form.component.css']
})
export class MoonsFormComponent implements OnInit {

  public form: FormGroup
  public router: Router
  public service: MoonsService
  private snackBar: MatSnackBar
  private location: Location

  constructor(public formBuild: FormBuilder, router: Router, service: MoonsService, snackBar: MatSnackBar,location: Location) {
    this.router = router
    this.snackBar = snackBar
    this.location = location
    this.service = service
    this.form = this.formBuild.group({
      name: [null],
      planetaMae: [null],
      semieixoMaior: [null],
      pressaoAtmosferica: [null],
      massa: [null],
      periodoDeRotacao: [null],
      periodoOrbital: [null],
      inclinacao: [null],
      velocidadeOrbitalMedia: [null]
    })
  }


  ngOnInit(): void {
  }

  public onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(this.form.value.name),
        error => this.onError());
  }

  public onCancel() {
    this.location.back()
  }

  private onError() {
    this.snackBar.open('Erro ao salvar informações de satelites naturais',
      '', {
      duration: 6000,
      verticalPosition: 'top',
      panelClass:['mat-toolbar', 'mat-warn'] 
     })
  }


  private onSuccess(moonsName:Moon) {
    this.snackBar.open(`O satelite natural ${moonsName} foi salvo com sucesso`,
      '', {
      duration: 6000,
      verticalPosition: 'top',
       panelClass: ['success'],
    })
    this.location.back()
  }

}
