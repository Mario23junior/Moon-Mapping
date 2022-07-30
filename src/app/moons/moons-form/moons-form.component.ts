import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(public formBuild: FormBuilder, router: Router, service: MoonsService, snackBar: MatSnackBar) {
    this.router = router
    this.snackBar = snackBar
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
      .subscribe(result => console.log(result),
        error => this.onError());
  }

  public onCancel() {
    this.router.navigate([''])
  }

  private onError() {
    this.snackBar.open('Erro ao salvar informações de satelites naturais',
      '', {
      duration: 6000,
      verticalPosition: 'top',
      panelClass:['mat-toolbar', 'mat-warn'] 
      // panelClass: ['success'] 
    })
  }

}
