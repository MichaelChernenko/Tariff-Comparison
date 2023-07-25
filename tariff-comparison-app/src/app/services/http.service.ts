import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getConsumption(consumption: number): Observable<Object> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('consumption',consumption);

    return this.http.get('http://localhost:3000/tariffs', {params: queryParams})
  }
}
