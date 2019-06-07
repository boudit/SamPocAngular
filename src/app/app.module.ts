import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityModule } from './activity/activity.module';
import { RoutingModule } from './routing/routing.module';

import "jquery"; 
import "signalr";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActivityModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
