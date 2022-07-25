import { Injectable } from '@angular/core';
import { Moon } from '../models/moon';
import { HttpClient } from '@angular/common/http'
import { first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoonsService {

  private httpClient: HttpClient
  private readonly API = '/assets/bd.json'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  listAll() {
    return this.httpClient.get<Moon[]>(this.API)
      .pipe(
        first(),
        tap(moons => console.log(moons))
      );
  }
}
