import { FormComponent } from './form/form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { cpuUsage } from 'process';
import { WeatherwidgetComponent } from './weatherwidget/weatherwidget.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'result', component: WeatherwidgetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
