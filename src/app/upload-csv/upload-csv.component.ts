import { Component } from '@angular/core';
import { CampaignsService } from '../_services/campaigns.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent {

    csvData: string = ""; 
    file!: File; 
    columns: string[] = [];

    
  
  constructor(private campaignService: CampaignsService) {}

  onChange(event: any) { 
    this.file = event.target.files[0]; 
  } 

  onUpload() {            
    this.campaignService.uploadFile(this.file).subscribe(
      (response: any) => {
        if (response.success) {                                        
          this.columns = Object.keys(response.result[0]);
          this.csvData = response.result;        
          this.campaignService.updateColumns(this.columns);
          console.log(response);                  
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
