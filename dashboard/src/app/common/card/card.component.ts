import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
