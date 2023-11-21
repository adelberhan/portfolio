import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: [] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.onWindowResize();
  }
  getScreenWidth: any;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
 autoplayHoverPause:true,
    dots: false,
    autoplaySpeed:1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',

    items:1,
    navSpeed: 700,
    autoplayTimeout: 1100,
    // autoplayTimeout: 5,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      },
    },
    nav: true,

  }
}
