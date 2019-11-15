import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GbNotificationsComponent } from './gb-notifications.component';

describe('GbNotificationsComponent', () => {
  let component: GbNotificationsComponent;
  let fixture: ComponentFixture<GbNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GbNotificationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
