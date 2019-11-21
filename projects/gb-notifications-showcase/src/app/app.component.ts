import { Component } from '@angular/core';
import { GbNotificationsService } from '../../../gb-notifications/src/lib/gb-notifications.service';

@Component({
  selector: 'app-root',
  template: `
    <h2>Simple Notifications</h2>
    <div class="simple-notifications">
      <button class="success-angle" (click)="createSuccessMessage()">Create success alert</button>
      <button class="danger-shadow" (click)="createDangerMessage()">Create danger alert</button>
      <button class="warning-gradient" (click)="createWarningMessage()">Create warning alert</button>
      <button class="info-pulse" (click)="createInfoMessage()">Create info alert</button>
      <gb-notifications></gb-notifications>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private gbNotificationsService: GbNotificationsService) {}

  public createSuccessMessage(): void {
    this.gbNotificationsService.createSuccessAlert('Successfully Created');
  }

  public createDangerMessage(): void {
    this.gbNotificationsService.createDangerAlert('Danger Cannot Delete');
  }

  public createWarningMessage(): void {
    this.gbNotificationsService.createWarningAlert('Warning Do Not Refresh');
  }

  public createInfoMessage(): void {
    this.gbNotificationsService.createInfoAlert('Include This Field');
  }
}
