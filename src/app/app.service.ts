import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  login() {
    var tk = 'Token eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaW5oZ2lhIiwidXNlcklkIjoiMTIzIiwicm9sZSI6ImFkbWluIn0.XidtsmhESWZboA6Gd1egMPSiRSn5hW9e9js3BN9d-0VnetYB09-BsODuV_3bvWH0aijaypqUy0ns47JiFhXw5g';
    // let head = new HttpHeaders();
    // head = head.set('Authorization', tk);

    // return this.http.get<any>('http://localhost:8084/rest/hello', {
    //   headers: head
    // });

    const headers = new HttpHeaders().set("Authorization", tk);
    console.log(headers.get('Authorization'));
    return this.http.get("http://localhost:8084/rest/hello", {headers});

  }

}
