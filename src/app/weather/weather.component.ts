import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  forecastWeather: any[] = [];
  curWeather: any;

  constructor(private weatherService: WeatherService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.fb.group({
      location: ['']
    });

  }

  getWeather(formValue) {
    this.getWeatherForecast(formValue.location)
    this.weatherService.getWeatherService(formValue.location).subscribe(data => {
      this.curWeather = data;
      console.log(this.curWeather);
    })
  }

  getWeatherForecast(cityName) {
    this.weatherService.getWeatherForecastService(cityName).subscribe(data => {


      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.indexOf('09:00:00') > -1) {
          // this.curWeather.push(data.list[i])
          this.forecastWeather.push(data.list[i])
        }
      }
    })
  }







}
