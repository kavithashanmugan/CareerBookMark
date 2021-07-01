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
  hirerLogin:boolean;
  email:any;
  closeResult: string;
  hirerId:any;
  signInUserForm = this.formBuilder.group({
    emailId:[''],
    password:['']
  })
  
  constructor(private formBuilder: FormBuilder,private router: Router,public firebase : FirebaseService) { }

  ngOnInit(){
    console.log("hey",this.firebase.isLoggedIn)

    if(this.firebase.isHirerLoggedIn == true || localStorage.getItem('hirer')!=null){
      this.hirerLogin = true;
      console.log("hirerLogin",this.hirerLogin)
      this.email = ((JSON.parse(localStorage.getItem('hirer'))).email);
      this.hirerId = localStorage.getItem('hirerId');
    }
  }
  async login(){
    await this.firebase.hirersignIn(this.signInUserForm.get('emailId').value,this.signInUserForm.get('password').value)
    let data = (JSON.parse(localStorage.getItem('hirer')));
    console.log("data...",data["uid"])
    this.hirerId = data["uid"];
    localStorage.setItem('hirerId', this.hirerId)
    this.router.navigate(['/company-portfolio',this.hirerId]);
    }
    async logout(){
      await this.firebase.logout();
      this.hirerLogin = false;
      localStorage.removeItem('hirerId')
      this.router.navigateByUrl('/home');
      localStorage.removeItem('hirer');
   }

}
