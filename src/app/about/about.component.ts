import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  // link='12RJ5G0ulQjNpsPsEYCcxZQHElpj2wu-8/view'
  // link = '1oiDCWCkBOhZ24P6FCd4V159EFS9Tmi8d/view';
  link = 'https://mustedueg-my.sharepoint.com/:b:/g/personal/77874_must_edu_eg/EZfPiKk9BVRPtTfrntmmsokBd-wPRRgfFXb85BoYHF5Ovw?e=7M4k1D';

  ngOnInit(): void {
    Aos.init({ disable: 'mobile' });
    Aos.refresh();

    this.animateObject()
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }



  animateObject(): void {
    anime({
      targets: ['.ring', '.circle'],
      translateY: [
        { value: -30, duration: 2500 },
        { value: 0, duration: 2500 }
      ],
      loop: true,
      easing: 'easeInOutQuad'
    });
  }
}
