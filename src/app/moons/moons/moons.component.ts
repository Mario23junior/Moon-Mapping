import { Component, OnInit } from '@angular/core';
import { Moon } from '../models/moon';

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.css']
})
export class MoonsComponent implements OnInit {

  moons: Moon[] = [
    { _id: 1, name:'Encélado',planetaMae: 'Saturno', semieixoMaior: '237948', pressaoAtmosferica: 'Vestígios; assimétrica', massa: 1081020, periodoDeRotacao: '1d 8h 53min 7s (rotação síncrona)', periodoOrbital: '1370218d', inclinacao: '0,019°', velocidadeOrbitalMedia: 1264 }
  ]
  displayedColumns = ['name', 'planetaMae', 'semieixoMaior', 'pressaoAtmosferica', 'massa', 'periodoDeRotacao', 'periodoOrbital', 'inclinacao', 'velocidadeOrbitalMedia']

  constructor() {
  }

  ngOnInit(): void {
  }

}
