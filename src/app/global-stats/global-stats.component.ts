import { GlobalService } from './../services/global.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1500)]),
    ]),
  ],
})
export class GlobalStatsComponent implements OnInit {
  constructor(private service: GlobalService) {}
  data: any[];

  confirmed;
  deaths;
  recovered;
  contNames: string[];
  contTotalCs: number[];
  contTotalDet: number[];
  contTotalRec: number[];
  ngOnInit(): void {
    const stats: number[] = [];

    this.service.getSummary().subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
        this.confirmed = res.Global.TotalConfirmed;

        this.deaths = res.Global.TotalDeaths;
        this.recovered = res.Global.TotalRecovered;

        this.contNames = res.Countries.map((el) => el.Country);
        this.contTotalCs = res.Countries.map((el) => el.TotalConfirmed);
        this.contTotalDet = res.Countries.map((el) => el.TotalDeaths);
        this.contTotalRec = res.Countries.map((el) => el.TotalRecovered);
        stats.push(this.confirmed, this.deaths, this.recovered);

        const myChart = new Chart('allData', {
          type: 'line',
          data: {
            labels: this.contNames,
            datasets: [
              {
                label: 'TOTAL CONFIRMED',
                data: this.contTotalCs,
                backgroundColor: 'rgba(218, 23, 23, 0.8)',
              },
              {
                label: 'TOTAL DEATHS',
                data: this.contTotalDet,
                backgroundColor: 'rgba(23, 20, 196, 0.8)',
              },
              {
                label: 'TOTAL RECOVERED',
                data: this.contTotalRec,
                backgroundColor: 'rgba(61, 153, 18, 0.8)',
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
