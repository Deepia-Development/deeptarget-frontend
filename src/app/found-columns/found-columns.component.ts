import { Component, Input } from '@angular/core';
import { CampaignsService } from '../_services/campaigns.service';

@Component({
  selector: 'app-found-columns',
  templateUrl: './found-columns.component.html',
  styleUrls: ['./found-columns.component.css']
})
export class FoundColumnsComponent {
  
  columns: any[] = [];

  constructor(private campaignService: CampaignsService){}

  ngOnInit(){
    this.campaignService.columns$.subscribe((result) =>{
      this.columns = result;
    })
  }

}
