import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ExtraOptions } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 57], // [x, y]
};

const routes: Routes = [
  { 
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills - RAV Cloud'
  },
  { 
    path: 'kontakt',
    component: KontaktComponent,
    title: 'Kontakt - RAV Cloud'
  },
  { 
    path: 'datenschutz',
    component: DatenschutzComponent,
    title: 'Datenschutz - RAV Cloud'
  },
  { 
    path: 'impressum',
    component: ImpressumComponent,
    title: 'Impressum - RAV Cloud'
  },
  { 
    path: '',
    component: HomeComponent,
    title: 'RAV Cloud - Websites at Scale.'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
