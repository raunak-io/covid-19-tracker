import { IndiaService } from './../../services/india.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-indian-states',
  templateUrl: './indian-states.component.html',
  styleUrls: ['./indian-states.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1500)]),
    ]),
  ],
})
export class IndianStatesComponent implements OnInit {
  stateWise: any;
  states: any;
  recoveredCases: number[];
  deathCases: number[];
  confirmedCases: number[];
  activeCases: number[];

  total_active;
  total_deaths;
  total_recovered;
  total_confirmed;

  constructor(private service: IndiaService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(
      (res) => {
        this.states = res.statewise;
        this.recoveredCases = res.statewise.map((el) => el.recovered);
        this.deathCases = res.statewise.map((el) => el.deaths);
        this.confirmedCases = res.statewise.map((el) => el.confirmed);
        this.activeCases = res.statewise.map((el) => el.active);

        this.recoveredCases.splice(0, 1);
        this.deathCases.splice(0, 1);
        this.confirmedCases.splice(0, 1);
        this.activeCases.splice(0, 1);
        this.stateWise = res.statewise.map((el) => el.state);
        this.stateWise.splice(0, 1);
        this.total_active = res.statewise[0].active;
        this.total_confirmed = res.statewise[0].confirmed;
        this.total_recovered = res.statewise[0].recovered;
        this.total_deaths = res.statewise[0].deaths;

        const myChart = new Chart('indiaData', {
          type: 'bar',
          data: {
            labels: this.stateWise,
            datasets: [
              {
                label: 'total active cases',
                data: this.activeCases,
                backgroundColor: 'rgba(208, 20, 185, 0.8)',
              },
              {
                label: 'total confirmed cases',
                data: this.confirmedCases,
                backgroundColor: 'rgba(218, 23, 23, 0.8)',
              },
              {
                label: 'total death cases',
                data: this.deathCases,
                backgroundColor: 'rgba(23, 20, 196, 0.8)',
              },
              {
                label: 'total recovered cases',
                data: this.recoveredCases,
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
