import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string
  key: string
  constructor(
    private http: HttpClient
  ) {
    this.url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';
    this.key = 'dca9fe8ec063a30e676167e637137fe3';
  }

  getWeatherByCity(city: string): Observable<any> {
    const URLNAME = this.url + this.key + '&q=' + city;
    return this.http.get(URLNAME);
  }

  getWeatherByCoords(lat: number, long: number): Observable<any> {
    const URLCOORDS = this.url + this.key + "&lat=" + lat + "&lon=" + long;
    return this.http.get(URLCOORDS);
  }
}
