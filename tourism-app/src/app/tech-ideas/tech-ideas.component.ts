import { Component, OnInit } from '@angular/core';
import { GetCityNamesService } from '../get-city-names.service';
import {FormBuilder, Validators} from '@angular/forms'
import {prohibited} from '../customValidation'

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent {

  cities:string [] = [];

  constructor(private _cityname: GetCityNamesService, private formB: FormBuilder){}

  techIdeasForm = this.formB.group({
    name: ["", [Validators.required, Validators.minLength(3), prohibited(/tourist/)]],
    age: [""],
    email: ["", [Validators.required]],
    city:["", [Validators.required]],
    brief:["", [Validators.required, Validators.minLength(100),prohibited(/nothing/)]]
  });
ngOnInit(){
  this.cities = this._cityname.getNames();
}

onClick(){
  console.log(this.techIdeasForm.controls.brief.value);
  this.techIdeasForm.reset();
}


}
