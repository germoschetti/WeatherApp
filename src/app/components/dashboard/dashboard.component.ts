import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  now: Date;
  days: string[]
  today: string;

  @Input() data: string;
  @Input() imgWeather: string;
  @Input() err: boolean;

  constructor() {
    //Get day of the week
    this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]
    this.today = this.days[new Date().getDay()]
  }

  ngOnInit(): void {
    this.clock();
  }
  
  // Reloj en tiempo real
  clock(): void {
    this.now = new Date();
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }




}
