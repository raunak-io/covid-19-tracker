import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
  ngOnInit(): void {}
}
