import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { 


  }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  signUp(User){
    let formData:any = Object.assign(User.value)
    console.log("user..",formData)
    return this.http.post('http://localhost:3000/api/signup',formData)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }
}
