import { Injectable } from '@angular/core';
import { Url } from './../utils/url';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  
  constructor(private http: HttpClient) { }

  getSummary() {
    let urlSummary = new Url().urlArr[0].toString();
    return this.http.get(urlSummary);
  }
}
