import { Component, OnInit } from '@angular/core';
import { Moon } from '../models/moon';
import { MoonsService } from '../services/moons.service';

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.css']
})
export class MoonsComponent implements OnInit {

  private moonsService: MoonsService

  moons: Moon[] = []
  displayedColumns = ['name', 'planetaMae', 'semieixoMaior', 'pressaoAtmosferica', 'massa',
   'periodoDeRotacao', 'periodoOrbital', 'inclinacao', 'velocidadeOrbitalMedia']

  constructor(moonsService: MoonsService) {
    this.moonsService = moonsService
  }

  ngOnInit(): void {
    this.moonsService.listAll()
  }

}
