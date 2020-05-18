import { IndiaService } from './services/india.service';
import { GlobalService } from './services/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfoComponent } from './components/info/info.component';
import { CountryComponent } from './components/country/country.component';
import { IndianStatesComponent } from './components/indian-states/indian-states.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalStatsComponent } from './global-stats/global-stats.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    InfoComponent,
    CountryComponent,
    IndianStatesComponent,
    NavbarComponent,
    GlobalStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [GlobalService, IndiaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
