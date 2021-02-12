import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {
  loot;
  private ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
  private apiKey = '2b403805c70374b90e3525a54825f917'


  constructor(private http: HttpClient) { }

  getWeatherService(cityName: string): Observable<any> {
    // const opts = { params: new HttpParams({fromString: 'appid='})}
    return this.http.get(this.ROOT_URL + cityName + '&units=metric&appid=' + this.apiKey)
  }

  ngOnInit() {

  }


}


