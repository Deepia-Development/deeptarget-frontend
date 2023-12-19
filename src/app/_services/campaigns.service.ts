import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  private apiUrl = "http://localhost:3000/api/campaigns/read-csv";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private columnsSubject = new BehaviorSubject<string[]>([]);
  columns$: Observable<string[]> = this.columnsSubject.asObservable();

    updateColumns(columns: string[]) {
      this.columnsSubject.next(columns);
    }

    uploadFile(file: File): Observable<any>{
        const formData= new FormData();
        formData.append('csvFile', file, file.name);

        return this.http.post(this.apiUrl, formData);
    }    
}
