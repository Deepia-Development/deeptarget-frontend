import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NoCampaignsComponent } from './no-campaigns/no-campaigns.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { FoundColumnsComponent } from './found-columns/found-columns.component';
import { TimelineBarComponent } from './timeline-bar/timeline-bar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'campaigns', component: CampaignsComponent },
  { path: 'no-campaigns', component: NoCampaignsComponent },
  { path: 'upload-csv', component: UploadCsvComponent },
  { path: 'csv-content', component: FoundColumnsComponent },
  { path: 'timeline', component: TimelineBarComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
