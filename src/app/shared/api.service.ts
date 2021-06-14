import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { 


  }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
     "Access-Control-Allow-Credentials":" true ",
"Access-Control-Allow-Methods": "OPTIONS, GET, POST",
"Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control"

    })
  }  

  // HttpClient API get() method => Fetch employees list
  signUpFireBase(User){
    // let formData:any = Object.assign(User.value)
   // console.log("user..",formData)
    return this.http.post('http://localhost:4000/api/signUpFireBase',User)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }

  createProfile(UserDetails){
    let formData:any = Object.assign(UserDetails.value)
    console.log("user details..",formData)
    return this.http.post('http://localhost:4000/api/createProfile',formData)
  }

  getProfile(userId){
    let params = new HttpParams();
    
    return this.http.get('http://localhost:4000/api/getProfile/'+ userId)
    
  }
  getAllProfiles(){
    let params = new HttpParams();
    
    return this.http.get('http://localhost:4000/api/getAllProfiles')
    
  }

  getAllJobs(){
    return this.http.get('http://localhost:4000/api/getAllJobs')
  }
  getGithubJobs(){
    return this.http.get('https://jobs.github.com/positions.json?search=node',this.httpOptions)
  }
}
