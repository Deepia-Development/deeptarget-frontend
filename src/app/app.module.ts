import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxVideoTimelineModule } from 'ngx-video-timeline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NoCampaignsComponent } from './no-campaigns/no-campaigns.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { FoundColumnsComponent } from './found-columns/found-columns.component';
import { HeaderComponent } from './header/header.component';
import { TimelineBarComponent } from './timeline-bar/timeline-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    SignupPageComponent,
    CampaignsComponent,
    NoCampaignsComponent,
    UploadCsvComponent,
    FoundColumnsComponent,
    HeaderComponent,
    TimelineBarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxVideoTimelineModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
