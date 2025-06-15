import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  ngOnInit(): void {
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
