import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import mixitup from 'mixitup';
import * as Aos from 'aos';
import { ProjectsService } from '../projects.service';
import { Subject } from 'rxjs'; // Import Subject for reactive updates
import { takeUntil } from 'rxjs/operators'; // Import takeUntil for proper unsubscription
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  // mixer: mixitup.Mixer | null = null; // Type it correctly as mixitup.Mixer
  private destroy$ = new Subject<void>(); // Used for unsubscribing observables

selectedType:string=''

setFilter(type:string){
  this.selectedType=type
  console.log(this.selectedType)
}


  constructor(private portfolioService: ProjectsService) {}

  ngOnInit(): void {
    Aos.init({ disable: false });
    Aos.refresh();

    // Fetch projects
    // this.portfolioService.getProjects()
    //   .pipe(takeUntil(this.destroy$)) // Unsubscribe when component is destroyed
    //   .subscribe((data) => {
    //     this.projects = data;
    // Schedule MixItUp initialization after Angular has rendered the projects
    // using setTimeout(0) or ngAfterViewInit is good here.
    // Let's rely on ngAfterViewInit for initial setup.

    // });




    this.portfolioService.portfolios$.pipe(takeUntil(this.projects)).subscribe((data) => {
      this.projects = data;
      console.log('Projects:', this.projects); // iterate here or in template
    });
  }

  // ngAfterViewInit(): void {
  //   // Ensure MixItUp is initialized after the initial view has rendered and data is available
  //   // We add a small timeout to ensure DOM is fully ready after initial data load
  //   setTimeout(() => {
  //     this.initializeMixitup();
  //     Aos.refresh(); // Refresh AOS after the initial DOM is built
  //   }, 100); // A small delay is often safer
  // }

  // Use a method to trigger updates to MixItUp and AOS when data changes
  // You would call this method whenever you add/update/delete projects
  updateProjectsAndRefresh(newProjects: any[]): void {
    this.projects = newProjects; // Update your data source

    // Re-configure/update MixItUp
    // MixItUp has an `update` method or you can destroy and re-initialize.
    // `dataset` method is better for adding/removing items.
    // if (this.mixer) {
    //   // Option 1: Using mixer.dataset() for additions/removals/updates
    //   // This is the most robust way to update MixItUp's dataset
    //   this.mixer
    //     .dataset(
    //       newProjects.map((p) => ({
    //         id: p.id, // MixItUp requires a unique ID for items
    //         // You can map your project data to MixItUp's expected format
    //         // Often, you just need the element itself, but if you're using data-attributes for filtering,
    //         // ensure they are present on the HTML elements.
    //       }))
    //     )
    //     .then(() => {
    //       Aos.refresh(); // Refresh AOS after MixItUp has finished its operations
    //       // If new elements were added, AOS needs to detect them
    //     });

    //   // Option 2 (Less ideal for additions/removals, better for just filtering):
    //   // If you're just changing filters and the elements are already in the DOM,
    //   // you might just need to re-filter. If you're adding/removing, Option 1 is better.
    //   // this.mixer.forceRefresh(); // forces MixItUp to re-evaluate the DOM
    //   // Aos.refresh();
    // } else {
    //   // If mixer wasn't initialized for some reason, initialize it
    //   this.initializeMixitup();
    //   Aos.refresh();
    // }
  }

  // private initializeMixitup(): void {
  //   const container = document.querySelector('.portfolio-gallery');
  //   if (container) {
  //     if (this.mixer) {
  //       this.mixer.destroy(); // Destroy existing MixItUp instance before re-initializing
  //     }
  //     this.mixer = mixitup(container, {
  //       selectors: {
  //         target: '.mix', // Ensures MixItUp recognizes the `mix` class
  //       },
  //       // Optionally, if you have specific filtering based on 'type', configure it here
  //       // data: {
  //       //   uidKey: 'id', // Use your project 'id' as the unique identifier for MixItUp items
  //       // },
  //     });
  //   }
  // }

  // // Important: Clean up subscriptions to prevent memory leaks
  // ngOnDestroy(): void {
  //   if (this.mixer) {
  //     this.mixer.destroy();
  //   }
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
}
