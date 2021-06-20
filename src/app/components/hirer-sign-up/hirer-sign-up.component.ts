import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from "../../shared/api.service";

@Component({
  selector: 'app-hirer-sign-up',
  templateUrl: './hirer-sign-up.component.html',
  styleUrls: ['./hirer-sign-up.component.css']
})
export class HirerSignUpComponent implements OnInit {
  isLoggedIn: boolean = false;
  userId:any;
  // signUpHirerForm = new FormGroup({
  //   name:new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.required),
  //   password:new FormControl('',Validators.required)
  // })
  status: boolean;
  show: boolean;
  signUpHirerForm = this.fb.group({

    emailId: [''],
    password: ['']
  })
  constructor(private fb: FormBuilder, public api: ApiService, private router: Router, public firebase: FirebaseService) {

  }

  ngOnInit() {
    this.show = false;
  }

  showPassword() {
    this.show = true;
  }
  onSubmit() {
    console.log("signing up..");
    console.log(this.signUpHirerForm.value);
  }
  async signUp() {
    console.log(this.signUpHirerForm.get('emailId').value)
    await this.firebase.signUp(this.signUpHirerForm.get('emailId').value, this.signUpHirerForm.get('password').value)
      .then((res) => {
        console.log("resssss", res)
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('isLoggedIn', 'true')
        this.userId = res.user.uid;
        console.log("userId is",this.userId)
        let userIdObj = { "userId":res.user.uid}
        let formData:any = Object.assign({},userIdObj)
        this.api.signUpCompanyFireBase(formData)
          .subscribe((res) => {
            if (res["status"] == true) {
              console.log("user signup:",this.userId)
              this.firebase.isLoggedIn = true;
              this.router.navigate(['/create-company-profile',this.userId]);
            }
            else{
              alert("error in signing up")
            }


          })

      })
      .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
    })
  }
}

  //     this.isLoggedIn = true
  //     localStorage.setItem('user',JSON.stringify(result.user))
  //     localStorage.setItem('isLoggedIn','true')

//   signUp(){
//     console.log("signing up....")

// this.api.signUp(this.signUpHirerForm)
//     .subscribe((res)=>{
//       if(res["status"] == true){
//       console.log("user signup:")
//       this.router.navigateByUrl('/create-profile');
//       }
//     })
//   }
