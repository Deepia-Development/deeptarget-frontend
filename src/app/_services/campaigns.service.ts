import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  private apiUrl = "http://localhost:3000/api/campaigns/read-csv";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

    read_csv(csvFile: File): Observable<any>{
        const formData = new FormData();
        formData.append('csvFile', csvFile);

        return this.http.post(this.apiUrl, formData);
    }

    

}
