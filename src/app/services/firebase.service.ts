import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;
  isActive;
  isHirerLoggedIn=false;
  apiURL = 'http://localhost:3000';
  constructor(public firebaseAuth: AngularFireAuth,private http: HttpClient) { }
  async signIn(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
    
      localStorage.setItem('user',JSON.stringify(res.user))
      sessionStorage.setItem('user',JSON.stringify(res.user))
    })
    .catch(err=>{
      alert(err)
    })
  }
  async hirersignIn(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isHirerLoggedIn = true
      localStorage.setItem('hirer',JSON.stringify(res.user))
      sessionStorage.setItem('hirer',JSON.stringify(res.user))
    })
  }

   signUp(email:string,password:string){
   //const result = await 
  return this.firebaseAuth.createUserWithEmailAndPassword(email,password)

  }

  logout(){
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    this.isActive = false;
    localStorage.removeItem('user')
  }
}
