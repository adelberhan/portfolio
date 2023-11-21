import { Component, OnInit } from '@angular/core';

declare function hamburgerMenu(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  ngOnInit(): void {
    hamburgerMenu();
  }

  constructor() {}
}
