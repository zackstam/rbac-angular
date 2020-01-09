import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { Router } from '@angular/router';
import { AppGuardService } from './app.guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'adminguard',
      useFactory: (router: Router) => new AppGuardService(['ADMIN'], router),
      deps: [
        Router
      ]
    },
    {
      provide: 'userguard',
      useFactory: (router: Router) => new AppGuardService(['USER'], router),
      deps: [
        Router
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
