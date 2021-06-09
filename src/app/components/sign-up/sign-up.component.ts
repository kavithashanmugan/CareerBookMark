import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // signUpUserForm = new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.required),
  //   password:new FormControl('',Validators.required)
  // })
  status:boolean;
  show:boolean; 
  signUpUserForm = this.fb.group({
    
    emailId:[''],
    password:['']
  })
  constructor(private fb:FormBuilder,public api: ApiService,private router: Router,public firebase : FirebaseService) { 
    
  }

  ngOnInit() {
    this.show=false;
  }

  showPassword(){
    this.show = true;
  }
  onSubmit(){
    console.log("signing up..");
    console.log(this.signUpUserForm.value);
  }
  async signUp(){
    console.log(this.signUpUserForm.get('emailId').value)
await this.firebase.signUp(this.signUpUserForm.get('emailId').value,this.signUpUserForm.get('password').value)
if(this.firebase.isLoggedIn)
{console.log("signup successful")
this.router.navigateByUrl('/create-profile');
}

  }

 
//   signUp(){
//     console.log("signing up....")
    
// this.api.signUp(this.signUpUserForm)
//     .subscribe((res)=>{
//       if(res["status"] == true){
//       console.log("user signup:")
//       this.router.navigateByUrl('/create-profile');
//       }
//     })
//   }
}
