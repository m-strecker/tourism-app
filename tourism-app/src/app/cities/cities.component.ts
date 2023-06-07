import { Component, OnInit } from '@angular/core';
import { GetcitiesService } from '../getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
cities:any;
color:any;

constructor(private _cities:GetcitiesService){}

  ngOnInit(){
    this.cities = this._cities.getCitiesinfo();
    this.color = this.colorit();
  }

  colorit(){
    for (var i=0; i<this.cities.length; i++){
      if (this.cities[i].attractionSites<3){
        return false;
      }
    }
    return true;
  }
}
