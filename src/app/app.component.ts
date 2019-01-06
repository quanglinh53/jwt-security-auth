import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
// import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'service-test';
  constructor(private service: AppService){ }
  ngOnInit(): void {
    this.connectApiWithToken();
  }

  connectApiWithToken(){
    this.service.login().subscribe(
      res => {
          console.log(res);
      }, error => {
        console.error(error);
      }
    )
  }
}
