import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  displayedColumns = ['name', 'planetaMae', 'semieixoMaior', 'pressaoAtmosferica', 'massa',
    'periodoDeRotacao', 'periodoOrbital', 'inclinacao', 'velocidadeOrbitalMedia']

  constructor(moonsService: MoonsService) {
    this.moonsService = moonsService
    this.moons$ = this.moonsService.listAll()
  }

  ngOnInit(): void {
  }

}
