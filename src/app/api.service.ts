import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import WeatherData from '../model/Datainterface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getData(city): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${environment.apiURI}/forecast?q=${city}&appid=${environment.apiKey}`)
  }
}
