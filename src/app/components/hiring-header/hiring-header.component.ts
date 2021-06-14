import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hiring-header',
  templateUrl: './hiring-header.component.html',
  styleUrls: ['./hiring-header.component.css']
})
export class HiringHeaderComponent implements OnInit {
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
  }
  async login(){
    await this.firebase.signIn(this.signInUserForm.get('emailId').value,this.signInUserForm.get('password').value)
    let data = (JSON.parse(localStorage.getItem('user')));
    console.log("data...",data["uid"])
    this.userId = data["uid"];
    this.router.navigate(['/company-portfolio',this.userId]);
    }
    async logout(){
      await this.firebase.logout();
      this.userLogin = false;
   }

}
