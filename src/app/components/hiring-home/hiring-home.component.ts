import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
@Component({
  selector: 'app-hiring-home',
  templateUrl: './hiring-home.component.html',
  styleUrls: ['./hiring-home.component.css']
})
export class HiringHomeComponent implements OnInit {
  isSignedIn = false;
  constructor(public firebase : FirebaseService,private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('hirer') !== null)
    this.isSignedIn = true;
    else
    this.isSignedIn = false;
  }
  signUp(){
    console.log("signing up")
    this.router.navigateByUrl('/hirer-signup')
  }
}
