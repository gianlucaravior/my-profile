import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { createPopup } from "@typeform/embed";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('rotateText', [
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      state('visible', style({
        opacity: 1,
        display: 'initial'
      })),
      transition('hidden => visible', [
        animate('500ms 1000ms ease-in')
      ]),
      transition('visible => hidden', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class HomeComponent {
  @ViewChild('devscroll') devscrollElement?: ElementRef;

  words = ['E-Commerce', 'kommunale', 'gemeinnützige'];
  currentWordIndex = 0;

  constructor() {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }, 3000);
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Wait until initialization is complete
    setTimeout(() => {
      if (this.devscrollElement) {
        gsap.to(this.devscrollElement.nativeElement, {
          y: 1488,
          scrollTrigger: {
            trigger: this.devscrollElement.nativeElement,
            start: "bottom bottom",
            end: "+=75%",
            scrub: true,
            id: "scrub"
          }
        });
      }
    });
  }

  openTypeform() {
    createPopup("MVw1EbOi", { size: 90 }).open(); // call open() on created popup
  }
}
