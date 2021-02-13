import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  forecastWeather: any[] = [];
  curWeather: any;
  public weatherSearchForm: FormGroup


  constructor(
    private router: Router,
    private weatherService: WeatherService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.fb.group({
      location: ['']
    });
  }

  getWeather(formValues) {
    this.getWeatherForecast(formValues.location)
    this.weatherService.getWeatherService(formValues.location).subscribe(data => {
      this.curWeather = data;
      this.router.navigate(['/result'])
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
