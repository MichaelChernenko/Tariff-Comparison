import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postConsumption(consumption: number) {
    const body = {
      consumption: consumption
    };

    return this.http.post('http://localhost:3000/tariffs', body)
  }
}
