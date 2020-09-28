import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';
import {HsJsonService} from './hs-json.service';
import { ArtDisplayComponent } from './art-display/art-display.component';

@NgModule({
   declarations: [
      AppComponent,
      ArtDisplayComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthorizationService,
         multi: true
      }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
