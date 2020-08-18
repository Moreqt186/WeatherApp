import {Component} from '@angular/core';
import {WeatherCityService} from './weather-city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ows: WeatherCityService) {
  }

  toggle = true;
  weatherCurrent;
  searchInput;

  methodSearchWeather() {
    this.ows.search(this.searchInput).subscribe(
      (data) => {
        console.log(data);
        this.weatherCurrent = data;
      }
    );
  }

  methodToggle() {
    this.toggle = !this.toggle;
  }

  methodRefreshWeatherCurrent() {
    this.weatherCurrent = null;
  }
}
