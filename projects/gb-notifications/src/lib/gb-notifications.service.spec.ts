import { TestScheduler } from 'rxjs/testing';
import { GbNotificationsService } from './gb-notifications.service';

describe('GbNotificationsService', () => {
  let notification: GbNotificationsService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    notification = new GbNotificationsService();
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should stream a success message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Success', message, color: 'green' };

    notification.createSuccessAlert(message);
    scheduler.expectObservable(notification.notificationMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a danger message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Danger', message, color: 'red' };

    notification.createSuccessAlert(message);
    scheduler.expectObservable(notification.notificationMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a warning message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Warning', message, color: 'darkorange' };

    notification.createSuccessAlert(message);
    scheduler.expectObservable(notification.notificationMessage$).toBe('a', { a: expectedMessage });
  });

  it('should stream a info message', () => {
    const message = 'Vinicius Junior - next worlds best footballer';
    const expectedMessage = { prefix: 'Info', message, color: 'dodgerblue' };

    notification.createSuccessAlert(message);
    scheduler.expectObservable(notification.notificationMessage$).toBe('a', { a: expectedMessage });
  });
});
