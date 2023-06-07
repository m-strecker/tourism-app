import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { TechIdeasComponent } from './tech-ideas/tech-ideas.component';

const routes: Routes = [
  {path: "weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo", component: WeatherDetailsComponent},
  { path: '', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'tech-ideas', component: TechIdeasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
