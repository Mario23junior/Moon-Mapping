import { Injectable } from '@angular/core';
import { Moon } from '../models/moon';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoonsService {

  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
      this.httpClient = httpClient
  }

  listAll(): Moon[] {
    return [
      { _id: 1, name: 'Encélado', planetaMae: 'Saturno', semieixoMaior: '237948',
       pressaoAtmosferica: 'Vestígios; assimétrica', massa: 1081020, periodoDeRotacao: '1d 8h 53min 7s', 
       periodoOrbital: '1370218d', inclinacao: '0,019°', velocidadeOrbitalMedia: 1264 }
    ]
  }
}
