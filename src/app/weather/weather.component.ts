import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecastWeather: any[] = [];
  curWeather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather()

    this.getWeatherForecast()
  }

  getWeatherForecast() {
    this.weatherService.getWeatherForecastService('Male').subscribe(data => {


      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.indexOf('09:00:00') > -1) {
          // this.curWeather.push(data.list[i])
          this.forecastWeather.push(data.list[i])
        }
      }
    })
  }

  getWeather() {
    this.weatherService.getWeatherService('Male').subscribe(data => {
      this.curWeather = data;
      console.log(this.curWeather);
    })
  }




}
