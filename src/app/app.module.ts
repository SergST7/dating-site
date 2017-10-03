import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add Material Design and Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,
         MatTabsModule,
         MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
