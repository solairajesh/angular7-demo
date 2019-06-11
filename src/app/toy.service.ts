import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ToyService {

  private toyServiceUrl = 'https://my-json-server.typicode.com/solairajesh/sample-api/toys';

  constructor(
    private http: HttpClient,
    private toyService: ToyService
  ) { }

  getToys(): Observable<any> {
    return this.http.get(this.toyServiceUrl);
  }

}