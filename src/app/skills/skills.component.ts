import { Component } from '@angular/core';

import { createPopup } from "@typeform/embed";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  openTypeform() {
    createPopup("MVw1EbOi", { size: 90 }).open(); // call open() on created popup
  }
}
