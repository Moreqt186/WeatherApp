import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export type WeatherD = {
  'coord': {
    'lon': string,
    'lat': string},
  'weather': [
    {
      'id': string,
      'main': string,
      'description': string,
      'icon': string
    }
  ],
  'base': string,
  'main': {
    'temp': number,
    'feels_like': string,
    'temp_min': string,
    'temp_max': string,
    'pressure': string,
    'humidity': string
  },
  'visibility': string,
  'wind': {
    'speed': string,
    'deg': string
  },
  'clouds': {
    'all': string
  },
  'dt': string,
  'sys': {
    'type': string,
    'id': string,
    'message': string,
    'country': string,
    'sunrise': string,
    'sunset': string
  },
  'timezone': string,
  'id': string,
  'name': string,
  'cod': string,
};

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
