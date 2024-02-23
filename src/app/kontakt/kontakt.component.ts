import { Component } from '@angular/core';
import { createWidget } from "@typeform/embed";

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {
  ngOnInit(): void {
    createWidget("MVw1EbOi", { 
      container: document.querySelector("#form") as HTMLElement,
      width: '100%',
      height: '500px',
      opacity: 0,
      hideFooter: true,
      hideHeaders: true,
      disableScroll: true,
    });
  }
}
