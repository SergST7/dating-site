import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Add Material Design and Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule,
         MatTabsModule,
         MatIconModule,
         MatGridListModule,
         MatSidenavModule,
         MatButtonModule,
         MatCardModule,
         MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModelsService} from "./models.service";

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
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
