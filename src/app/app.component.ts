import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import WeatherData from '../model/Datainterface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localbuzz';
  public fivedays = [];
  public currentCity = {};
  constructor(private _service: ApiService) {

  }

  ngOnInit() {
    this._service.getData('pune').subscribe((response: WeatherData) => {
      this.currentCity = response.city;
      this.fivedays = response.list.slice(0, 5)

      console.log(this.currentCity, this.fivedays);


    })
  }

  fetchdata(e) {
    console.log('hi');

  }
}
