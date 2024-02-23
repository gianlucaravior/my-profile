import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showNavbar = false;

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  closeNavbar() {
    this.showNavbar = false;
  }
}
