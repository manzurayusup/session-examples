import { CovidService } from './services/covid.service';
import { Component } from '@angular/core';
import { CovidModel } from './models/covid-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  covData = new CovidModel();
  

  constructor(private covid: CovidService) { 
    this.covid.getSummary().subscribe((data) => {
      this.covData = data as CovidModel;
    });

    console.log(this.covData);
  }
}
