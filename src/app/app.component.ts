import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:object;
  img:string;
  err:boolean;
  title = 'clima';

  getDataFromOutput(data: object) {
    this.img = 'http://openweathermap.org/img/w/'+data['weather'][0].icon+'.png';
    this.data = data;
    this.checkErr(false);
  }

  checkErr(err:boolean){
    this.err = err;
  }
}

