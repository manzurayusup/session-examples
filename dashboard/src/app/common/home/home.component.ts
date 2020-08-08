import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input() data: {};
  @Input() title: String;
  @Input() value: Number;
  
  ngOnInit(): void {
    this.title = this.data["title"];
    this.value = this.data["value"];
  }

}
