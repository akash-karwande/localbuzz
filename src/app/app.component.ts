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
  public cityName = 'Mumbai';
  public currentCity;
  public loading: boolean;
  constructor(private _service: ApiService) {

  }

  ngOnInit() {
    this.loading = true;
    this._service.getData(this.cityName).subscribe((response: WeatherData) => {
      this.currentCity = response.city;
      this.fivedays = response.list
      this.loading = false
    })
  }

  fetchdata(event) {
    if (event.key == 'Enter') {
      this.loading = true;
      this._service.getData(event.target.value).subscribe((response: WeatherData) => {
        this.currentCity = response.city;
        this.fivedays = response.list
        // console.log(this.fivedays, this.currentCity);
      }, (err) => {
        alert(`Weather not available for the ${event.target.value}`)
        this.loading = false
      }, () => {
        this.loading = false
      })
    }
  }
}
