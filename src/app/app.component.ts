import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare function hamburgerMenu(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  ngOnInit(): void {
    hamburgerMenu();
    AOS.init({ disable: 'mobile' });
    AOS.refresh();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
  constructor() {}
}
