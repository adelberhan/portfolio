import { AfterViewInit, Component, OnInit } from '@angular/core';
import mixitup from 'mixitup';
import * as Aos from 'aos';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  projects: any[] = [];

  constructor(private portfolioService: ProjectsService) {}

  ngOnInit(): void {
    Aos.init({ disable: false });
    Aos.refresh();

    // Fetch projects in ngOnInit
    this.portfolioService.getProjects().subscribe((data) => {
      this.projects = data;

      // Wait for DOM update and initialize MixItUp
      setTimeout(() => {
        const container = document.querySelector('.portfolio-gallery');
        if (container) {
          mixitup(container);
        }
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    // Refresh AOS animations
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }
}
