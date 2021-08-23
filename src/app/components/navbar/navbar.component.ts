import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  city: string;
  errInput: boolean;

  @Output() dataEvent = new EventEmitter<object>();
  @Output() errEvent = new EventEmitter<boolean>();

  constructor(
    private _weatherService: WeatherService,
  ) {
    // set default values ​​and get the data
    this.city = 'Montevideo';
    this.getWeatherByCity();

    // check if geolocation is available and get the data
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeatherByCoords(position.coords.latitude, position.coords.longitude);
        this.city = '';
      },
        (err) => {
          console.warn('ERROR(' + err.code + '): ' + err.message);
        });
    }
  }

  ngOnInit(): void { }

  // method for the output
  sendData(value: object) {
    this.dataEvent.emit(value);
  }

  //Check err
  err(value: boolean) {
    this.errEvent.emit(value);
  }

  // methods to consume the weather services
  getWeatherByCity() {
    this._weatherService.getWeatherByCity(this.city).subscribe(data => {
      this.sendData(data);
    }, err => {
      this.err(true)
      return err
    });
  }

  getWeatherByCoords(lat: number, long: number) {
    this._weatherService.getWeatherByCoords(lat, long).subscribe((data) => {
      this.sendData(data);
    })
  }

}
