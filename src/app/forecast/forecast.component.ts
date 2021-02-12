import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() forecast: string[]
  ROOT_IMG_URL: string = 'http://openweathermap.org/img/wn/'
  constructor() { }

  ngOnInit(): void {
  }


}
