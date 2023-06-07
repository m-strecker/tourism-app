import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {

  Name!: string;
  SummerM!: number;
  SummerN!: number;
  WinterM!:number;
  WinterN!:number;
  SpringM!:number;
  SpringN!: number;
  AutumnM!: number;
  AutumnN!: number;
  Vt!: string;
  Vf!: string;



  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Name = params['name'];
      this.SummerM = +params['summerM'];
      this.SummerN = +params['summerN'];
      this.WinterM = +params['winterM'];
      this.WinterN = +params['winterN'];
      this.SpringM = +params['springM'];
      this.SpringN = +params['springN'];
      this.AutumnM = +params['autumnM'];
      this.AutumnN = +params['autumnN'];
      this.Vt = params['visitTo'];
      this.Vf = params['visitFrom'];
    });
  }
  

}
