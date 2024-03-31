import { Component } from '@angular/core';

import { createPopup } from "@typeform/embed";
import { getAnalytics, logEvent } from "firebase/analytics";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  openTypeform() {
    createPopup("MVw1EbOi", { 
      size: 90,
      onReady: () => {
        const analytics = getAnalytics();
        logEvent(analytics, 'form_start', {
          form_name: 'contact',
          form_destination: 'app-skills'
        });
      },
      onSubmit: () => {
        const analytics = getAnalytics();
        logEvent(analytics, 'form_submit', {
          form_name: 'contact',
          form_destination: 'app-skills',
          form_submit_text: 'submit'
        });
      }
    }).open(); // call open() on created popup
  }
}
