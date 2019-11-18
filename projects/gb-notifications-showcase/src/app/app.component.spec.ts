import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GbNotificationsModule } from '../../../gb-notifications/src/lib/gb-notifications.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [GbNotificationsModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
