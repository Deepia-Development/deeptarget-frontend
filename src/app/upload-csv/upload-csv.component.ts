import { Component } from '@angular/core';
import { CampaignsService } from '../_services/campaigns.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent {
    
    file!: File; 
    content: any[] = [];

    
  
  constructor(
    private campaignService: CampaignsService,
    private router: Router) {}

  onChange(event: any) { 
    this.file = event.target.files[0]; 
  } 

  onUpload() {            
    this.campaignService.uploadFile(this.file).subscribe(
      (response: any) => {
        if (response.success) {                                                                                          
          this.content = response.result;    
          this.campaignService.updateColumns(this.content);
          console.log(this.content);
                                                                                                    
        } else {
          console.error(response.message);          
        }
      },
      (error) => {
        console.error(error);        
      }
    );
  }   
}
function then(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

