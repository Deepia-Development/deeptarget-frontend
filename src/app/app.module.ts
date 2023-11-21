import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NoCampaignsComponent } from './no-campaigns/no-campaigns.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    SignupPageComponent,
    CampaignsComponent,
    NoCampaignsComponent,
    UploadCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
