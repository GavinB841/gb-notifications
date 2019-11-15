import { Component } from '@angular/core';
import { GbNotificationsService } from '../../../gb-notifications/src/lib/gb-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
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
