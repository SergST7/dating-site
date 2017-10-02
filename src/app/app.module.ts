import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add Material Design and Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
