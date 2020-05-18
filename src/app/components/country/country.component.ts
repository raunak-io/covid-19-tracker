import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1500)]),
    ]),
  ],
})
export class CountryComponent implements OnInit {
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  constructor(private service: GlobalService) {}
  countryNames: string[];
  country: any;
  ngOnInit() {
    let globalData: any[] = [];

    this.service.getSummary().subscribe(
      (res: any) => {
        this.countryNames = res.Countries.map((el) => el.Country);

        globalData = res.Countries;
        // console.log(this.countryNames, globalData);
      },
      (error) => {
        alert(error);
      }
    );
  }
  getCountry(contval) {
    this.service.getOneCountry(contval).subscribe(
      (res) => {
        const index = res.length - 1;

        this.confirmed = res[index].Confirmed;
        this.deaths = res[index].Deaths;
        this.recovered = res[index].Recovered;
        this.active = res[index].Active;

        const myChart = new Chart('countryData', {
          type: 'bar',
          data: {
            labels: [
              'Total confirmed cases',
              'Total Deaths',
              'Total Recovered',
              'Total Active Cases',
            ],
            datasets: [
              {
                label: contval,
                data: [
                  this.confirmed,
                  this.deaths,
                  this.recovered,
                  this.active,
                ],
                backgroundColor: [
                  'rgba(218, 23, 23, 0.8)',
                  'rgba(23, 20, 196, 0.8)',
                  'rgba(61, 153, 18, 0.8)',
                  'rgba(212, 13, 23, 0.8)',
                ],
              },
            ],
          },
        });
      },
      (error) => {
        alert(error);
      }
    );
  }
}
