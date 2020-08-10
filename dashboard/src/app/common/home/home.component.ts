import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input() data: {};
  title: String;
  value: Number;
  className: String;
  
  ngOnInit(): void {
    this.title = this.data["title"];
    this.value = this.data["value"];
    this.className = this.data["className"];
  }

}
