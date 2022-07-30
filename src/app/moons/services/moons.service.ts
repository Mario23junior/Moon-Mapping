import { Injectable } from '@angular/core';
import { Moon } from '../models/moon';
import { HttpClient } from '@angular/common/http'
import { delay, first, Observable, take, tap } from 'rxjs';


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

  save(request: Moon) {
    return this.httpClient.post<Moon>(this.API, request)
      .pipe(
        first()
      )
  }

  readonly(id:number): Observable<Moon> {
    const urlId = `${this.API}/${id}`
    return this.httpClient.get<Moon>(urlId)
  }

  update(moonsId: Moon): Observable<Moon> {
    const url = `${this.API}/${moonsId._id}`
    return this.httpClient.put<Moon>(url, moonsId)
  }
}
