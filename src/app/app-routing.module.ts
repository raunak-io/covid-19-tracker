import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { CountryComponent } from './components/country/country.component';
import { IndianStatesComponent } from './components/indian-states/indian-states.component';
import { InfoComponent } from './components/info/info.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'global-stats',
    component: GlobalStatsComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'indian-states',
    component: IndianStatesComponent,
  },
  {
    path: 'country',
    component: CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
