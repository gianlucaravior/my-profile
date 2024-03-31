import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GradientButtonDirective } from './gradient-button.directive';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StoreModule } from '@ngrx/store';

import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';

import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentModule = {
  "cookie": {
    "domain": "www.rav-cloud.de"
  },
  "position": "bottom-left",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#ffffff",
      "text": "#000000",
      "link": "#ffffff"
    },
    "button": {
      "background": "#07071a",
      "text": "#ffffff",
      "border": "transparent"
    },
    "highlight": {
      "background": "#07071a",
      "text": "#ffffff",
      "border": "transparent"
    }
  },
  "type": "opt-in",
  "content": {
    "message": "Wir und unsere Marketingpartner verwenden Cookies, um Anzeigen zu personalisieren und ihre Wirksamkeit zu messen. Unsere Partner können auch Daten durch Cookies sammeln. Wenn Sie auf den Button \"Einstellungen\" klicken, erfahren Sie mehr über die Arten von Cookies, die wir verwenden, und können deren Verwendung steuern. Bitte beachten Sie, dass nicht-essentielle Cookies Ihre ausdrückliche Zustimmung erfordern, bevor sie verwendet werden können.",
    "dismiss": "Got it!",
    "deny": "Ablehnen",
    "link": "Mehr erfahren",
    "href": "/datenschutz",
    "policy": "Cookie Policy"
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GradientButtonDirective,
    SkillsComponent,
    FooterComponent,
    KontaktComponent,
    DatenschutzComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    provideFirebaseApp(() => initializeApp({"projectId":"rav-cloud","appId":"1:56870615962:web:e8f3e28ea75909b7309823","storageBucket":"rav-cloud.appspot.com","apiKey":"AIzaSyDFwDWwUcIAMfQ5kRoBAROM1Mk_hjJ7w30","authDomain":"rav-cloud.firebaseapp.com","messagingSenderId":"56870615962","measurementId":"G-BQK0ETX9Y9"})),
    provideAnalytics(() => getAnalytics()),
    providePerformance(() => getPerformance()),
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
    provideClientHydration(),
    ScreenTrackingService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }