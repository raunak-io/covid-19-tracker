import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1500)]),
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
