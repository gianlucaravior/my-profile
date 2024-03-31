import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  constructor(private analyticsService: AnalyticsService,
    private ccService: NgcCookieConsentService,
    private cookieService: CookieService) { }

  title = 'ravcloud';

  ngOnInit(): void {
    this.changeConsent(this.cookieService.get('cookieconsent_status'));
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (e) => {
        this.changeConsent(e.status);
      });
  }

  changeConsent(consent: string): void {
    switch(consent) { 
      case "allow": {
        this.analyticsService.updateConsent(true);
         break; 
      }
      default: { 
        this.analyticsService.updateConsent(false);
         break; 
      } 
   }
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
