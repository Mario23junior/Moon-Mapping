import { Injectable } from '@angular/core';
import { Moon } from '../models/moon';
import { HttpClient } from '@angular/common/http'
import { delay, first, take, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoonsService {

  private httpClient: HttpClient
  private readonly API = '/api/moons'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  listAll() {
    return this.httpClient.get<Moon[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(moons => console.log(moons))
      );
  }


  save(request:Moon) {
     return this.httpClient.post<Moon>(this.API, request)
     .pipe(
      first()
     )
    }
}
