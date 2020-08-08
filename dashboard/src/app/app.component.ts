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
  summary = [
    {title: "NewConfirmed", value: 0},
    {title: "TotalConfirmed", value: 0},
    {title: "NewDeaths", value: 0},
    {title: "TotalDeaths", value: 0},
    {title: "NewRecovered", value: 0},
    {title: "TotalRecovered", value: 0}
  ]
  

  constructor(private covid: CovidService) {
  }

  ngOnInit(): void {
    this.covid.getSummary().subscribe((res) => {
      this.covData = res as CovidModel;
    });
    console.log(this.covData);

    for (let i = 0; i < this.summary.length; i++) {
      const t = this.summary[i]["title"];
      this.summary[i]["value"] = this.covData.Global[t];
    }
  }


}
  

  
