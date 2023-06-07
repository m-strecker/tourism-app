import { Component, OnInit } from '@angular/core';
import { GetweatherService } from '../getweather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {


weatherData:any[]=[];

constructor (private weatherService: GetweatherService){}

ngOnInit(){
  this.weatherData = this.weatherService.getWeather();
}

}
