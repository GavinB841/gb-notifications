import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { NotificationMessage, GbNotificationsService } from './gb-notifications.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gb-notifications',
  template: `
    <div
      class="alert"
      *ngIf="notificationMessage$ | async as alertMessage"
      [ngStyle]="{ background: alertMessage.color }"
    >
      <span class="closebtn" (click)="closeAlert()">&times;</span>
      <strong>{{ alertMessage.prefix }}!</strong> {{ alertMessage.message }}
    </div>
  `,
  styles: []
})
export class GbNotificationsComponent implements OnInit {
  notificationMessage$: Observable<NotificationMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private gbNotificationService: GbNotificationsService) {}

  ngOnInit() {
    this.notificationMessage$ = merge(this.gbNotificationService.notificationMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}
