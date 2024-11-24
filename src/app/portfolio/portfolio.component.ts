import { AfterViewInit, Component, OnInit ,AfterViewChecked} from '@angular/core';
import mixitup from 'mixitup';
import * as Aos from 'aos';
import { ProjectsService } from '../projects.service';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit,AfterViewChecked {
  projects: any[] = [];
  mixer: any; // Reference to the MixItUp instance

  constructor(private portfolioService: ProjectsService) {}

  ngOnInit(): void {
    Aos.init({ disable: false });
    Aos.refresh();

    // Fetch projects in ngOnInit
    this.portfolioService.getProjects().subscribe((data) => {
      this.projects = data;

      // Reinitialize MixItUp after the projects are fetched
      setTimeout(() => {
        this.initializeMixitup();
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    // Refresh AOS animations
    setTimeout(() => {
      Aos.refresh();
    }, 500);
  }

  private initializeMixitup(): void {
    const container = document.querySelector('.portfolio-gallery');
    if (container) {
      if (this.mixer) {
        this.mixer.destroy(); // Destroy existing MixItUp instance if any
      }
      this.mixer = mixitup(container, {
        selectors: {
          target: '.mix', // Ensures MixItUp recognizes the `mix` class
        },
      });
    }
  }

  ngAfterViewChecked(): void {
    // Initialize MixItUp after DOM updates
    const container = document.querySelector('.portfolio-gallery');
    if (container && !this.mixer) {
      this.mixer = mixitup(container, {
        selectors: { target: '.mix' },
      });
    }
  }
}
