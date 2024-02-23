import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGradientButton]'
})
export class GradientButtonDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // x-Position innerhalb des Elements
    const y = event.clientY - rect.top;  // y-Position innerhalb des Elements

    this.el.nativeElement.style.setProperty('--x', `${x}px`);
    this.el.nativeElement.style.setProperty('--y', `${y}px`);
  }
}
