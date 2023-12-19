import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-found-columns',
  templateUrl: './found-columns.component.html',
  styleUrls: ['./found-columns.component.css']
})
export class FoundColumnsComponent {
  
  @Input() columns: string[] = [];

}
