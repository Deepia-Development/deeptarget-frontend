import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxVideoTimelineModule } from 'ngx-video-timeline';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthLoginService } from './_services/auth-login.service';
import { JwtResponse } from './_models/jwt-response';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

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
import { CatchTokenService } from './_services/catch-token.service';
import { AuthRoutesService } from './_services/auth-routes.service';



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
    MatDialogModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    AuthLoginService, AuthRoutesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchTokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
