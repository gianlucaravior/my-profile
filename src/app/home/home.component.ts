import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  @ViewChild('devscroll', { static: true }) devscrollElement!: ElementRef;

  words = ['E-Commerce', 'kommunale', 'gemeinnützige'];
  currentWordIndex = 0;

  constructor() {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }, 3000);
  }

  openTypeform() {
    createPopup("MVw1EbOi", { size: 90 }).open(); // call open() on created popup
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateSVGPosition();
  }

  updateSVGPosition() {
    const elementPosition = this.devscrollElement.nativeElement.getBoundingClientRect();
    const scrollPercentage = (window.scrollY - elementPosition.top + window.innerHeight)

    if (scrollPercentage >= 0 && scrollPercentage <= 1) {
      const newYPosition = 1488 * scrollPercentage; // Ersetze 1488 durch den gewünschten Y-Wert bei 100% Scroll
      this.devscrollElement.nativeElement.setAttribute('transform', `translate(0, ${newYPosition})`);
    }
  }
}
