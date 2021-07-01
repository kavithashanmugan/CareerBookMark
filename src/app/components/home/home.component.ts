import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isSignedIn = false;
  constructor(public firebase : FirebaseService,private router: Router) { }
  
  ngOnInit(){
    if(localStorage.getItem('user')!=null){
    this.isSignedIn = true;
    }
    else
    this.isSignedIn = false;
  }

  signUp(){
    console.log("signing up")
    this.router.navigateByUrl('/sign-up')
  }

}
