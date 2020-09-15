import {Component} from '@angular/core';
import {WeatherCityService} from './weather-city.service';
import {WeatherInterface} from './models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentWeather: WeatherInterface;
  toggle = true;
  searchInput: string;

  constructor(private ows: WeatherCityService) {
  }

  searchWeather(): void {
    this.ows.search(this.searchInput).subscribe(
      (data) => {
        this.currentWeather = data;
      }
    );
  }

  tumbler(): void {
    this.toggle = !this.toggle;
  }

  renameCity(): void {
    this.currentWeather = null;
  }
}
