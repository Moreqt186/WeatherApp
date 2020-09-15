import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherInterface} from './models/weather';

export type WeatherD = WeatherInterface;

@Injectable(
  {providedIn: 'root'})
export class WeatherCityService {
  private API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<WeatherD> {
    return this.http
      .get<WeatherD>(`${this.API_PATH}?q=${query}&appid=fc3c2f7ef73c893e929199028755ec03`);
  }
}
