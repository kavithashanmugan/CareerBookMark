import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from './../../services/firebase.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  userLogin:boolean;
  email:any;
  closeResult: string;
  userId:any;
  signInUserForm = this.formBuilder.group({
    emailId:[''],
    password:['']
  })
  
  

  constructor(private formBuilder: FormBuilder,private router: Router,public firebase : FirebaseService) { }

  ngOnInit(){
  console.log("hey",this.firebase.isLoggedIn)
    if(this.firebase.isLoggedIn == true){
      
      this.userLogin = true;
      console.log("userLogin",this.userLogin)
      this.email = ((JSON.parse(localStorage.getItem('user'))).email);
      this.userId = localStorage.getItem('userId');
    }

    
   
  }

  hireNow(){
    console.log("hiring home...")
    this.router.navigateByUrl('/hiring-home');
  }
  async logout(){
     await this.firebase.logout();
    
     this.userLogin = false;
     localStorage.removeItem('userId')
     this.router.navigateByUrl('/home');
  }
  async login(){
  await this.firebase.signIn(this.signInUserForm.get('emailId').value,this.signInUserForm.get('password').value)
  let data = (JSON.parse(localStorage.getItem('user')));
  console.log("data...",)
  localStorage.setItem('userId', data["uid"]);
  this.userId = localStorage.getItem('userId');
  this.router.navigate(['/portfolio',localStorage.getItem('userId')]);
  }
}
