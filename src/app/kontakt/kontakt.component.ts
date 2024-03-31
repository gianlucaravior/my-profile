import { Component } from '@angular/core';

import { createWidget } from "@typeform/embed";
import { getAnalytics, logEvent } from "firebase/analytics";

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
      onStarted: () => {
        const analytics = getAnalytics();
        logEvent(analytics, 'form_start', {
          form_name: 'contact',
          form_destination: 'app-kontakt'
        });
      },
      onSubmit: () => {
        const analytics = getAnalytics();
        logEvent(analytics, 'form_submit', {
          form_name: 'contact',
          form_destination: 'app-kontakt',
          form_submit_text: 'submit'
        });
      }
    });
  }
}
