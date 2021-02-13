import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() curWeather;
  @Input() forecastWeather

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {

  }

}
