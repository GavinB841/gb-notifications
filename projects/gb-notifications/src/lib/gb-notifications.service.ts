import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface NotificationMessage {
  prefix: string;
  message: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class GbNotificationsService {
  public notificationMessage$ = new Subject<NotificationMessage>();

  public createSuccessAlert(message: string): void {
    this.notificationMessage$.next(this.createAlertMessage('Success', message, 'green'));
  }

  public createDangerAlert(message: string): void {
    this.notificationMessage$.next(this.createAlertMessage('Danger', message, 'red'));
  }

  public createWarningAlert(message: string): void {
    this.notificationMessage$.next(this.createAlertMessage('Warning', message, 'darkorange'));
  }

  public createInfoAlert(message: string): void {
    this.notificationMessage$.next(this.createAlertMessage('Info', message, 'dodgerblue'));
  }

  private createAlertMessage(prefix: string, message: string, color: string): NotificationMessage {
    return { prefix, message, color };
  }
}
