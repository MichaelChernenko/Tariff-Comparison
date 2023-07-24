import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postConsumption(consumption: number): Observable<Object> {
    const body = {
      consumption: consumption
    };

    return this.http.post('http://localhost:3000/tariffs', body)
  }
}
