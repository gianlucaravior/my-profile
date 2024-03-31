import { Injectable } from '@angular/core';
import { Analytics, setAnalyticsCollectionEnabled } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private analytics: Analytics) { }

  updateConsent(consent: boolean): void {
    setAnalyticsCollectionEnabled(this.analytics, consent);
    console.log('Analytics collection is now', consent ? 'enabled' : 'disabled')
  }
}
