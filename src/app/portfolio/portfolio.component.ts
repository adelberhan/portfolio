import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit ,AfterViewInit  {

  constructor( ){}

  ngOnInit(): void {
    Aos.init({ disable: false });
    Aos.refresh();
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }


}
