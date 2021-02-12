import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecastW: any[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherService('London').subscribe(data => {

      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.indexOf('09:00:00') > -1) {
          // this.curWeather.push(data.list[i])
          this.forecastW.push(data.list[i])
        }
      }

      console.log(this.forecastW);

    })

  }




}
