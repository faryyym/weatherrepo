import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherwidgetComponent } from './weatherwidget/weatherwidget.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CustomDatePipe } from './custom.datepipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherwidgetComponent,
    WeatherComponent,
    ForecastComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
