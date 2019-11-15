import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GbNotificationsModule } from '../../../gb-notifications/src/lib/gb-notifications.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GbNotificationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
