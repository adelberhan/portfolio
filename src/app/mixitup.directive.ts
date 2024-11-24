
 import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
 const mixitup = require('mixitup');


@Directive({
   selector: '[appMixitup]'
})

  export class MixitupDirective implements AfterViewInit, OnDestroy {
    private mixer: any;

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
      // Initialize MixItUp on the element
      this.mixer = mixitup(this.el.nativeElement, {
        selectors: {
          target: '.mix'
        },
        animation: {
          duration: 300
        }
      });
    }

    ngOnDestroy() {
      // Destroy MixItUp instance to avoid memory leaks
      if (this.mixer) {
        this.mixer.destroy();
      }
    }

}
