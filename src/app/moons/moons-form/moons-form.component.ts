import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moons-form',
  templateUrl: './moons-form.component.html',
  styleUrls: ['./moons-form.component.css']
})
export class MoonsFormComponent implements OnInit {

  public form: FormGroup
  public router:Router

  constructor(public formBuild: FormBuilder,router:Router) {
    this.router = router
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
  
  public onSubmit() {

  }

  public onCancel() {
     this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
