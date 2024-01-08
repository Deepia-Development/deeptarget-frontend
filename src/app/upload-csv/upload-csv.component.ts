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
    classAplied = false;
    tailwindClasses = new Map<string, boolean>();
    defaultClass = 'py-2 mb-5 mt-5 md:mb-0 md:mt-0 w-full bg-purple-900 to-gray-900 font-bold md:py-3 rounded-3xl text-white md:w-40';
    
  
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

  toggleClass(key: string){
    this.tailwindClasses.set(key, !this.tailwindClasses.get(key));
  }

}

