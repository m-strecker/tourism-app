import { Injectable } from '@angular/core';
import { Citiesinfo } from './cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

  constructor() { }

  getCitiesinfo(){
    return Citiesinfo;

  }
}
