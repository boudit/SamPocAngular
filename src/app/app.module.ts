import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityModule } from './activity/activity.module';
import { RoutingModule } from './routing/routing.module';
import { IZModule } from './sam-modules/iz/iz.module';
import { JBModule } from './sam-modules/jb/jb.module';
import { TBModule } from './sam-modules/tb/tb.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActivityModule,
    RoutingModule,
    IZModule,
    JBModule,
    TBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
