import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() data: Object[];
  

  ngOnInit(): void {
  }

  btnSortHandler(key, v: Number) {
    this.data.sort((a, b) => {
      if (v == -1) {  
        return a[key] < b[key] ? 1 : -1;  //descending order
      } else {        
        return a[key] < b[key] ? -1 : 1;  // ascending order
      }
    });
    console.log(this.data);
  }

}
