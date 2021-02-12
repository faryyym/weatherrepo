import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {
  loot;
  private ROOT_URL = 'http://api.openweathermap.org/data/2.5/'
  private apiKey = '2b403805c70374b90e3525a54825f917'
  private fcParam = 'forecast?q='
  private cwParam = 'weather?q='
  private metricAppIdParam = '&units=metric&appid='


  constructor(private http: HttpClient) { }

  getWeatherForecastService(cityName: string): Observable<any> {
    // const opts = { params: new HttpParams({fromString: 'appid='})}
    return this.http.get(this.ROOT_URL + this.fcParam + cityName + this.metricAppIdParam + this.apiKey)
  }

  getWeatherService(cityName: string): Observable<any> {
    return this.http.get(this.ROOT_URL + this.cwParam + cityName + this.metricAppIdParam + this.apiKey)
  }


  ngOnInit() {

  }


}


