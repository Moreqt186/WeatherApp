import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherInterface} from './models/weather';

export type WeatherData = WeatherInterface;

@Injectable(
  {providedIn: 'root'})
export class WeatherCityService {
  private API_PATH = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<WeatherData> {
    return this.http
      .get<WeatherData>(`${this.API_PATH}?q=${query}&appid=fc3c2f7ef73c893e929199028755ec03`);
  }
}
