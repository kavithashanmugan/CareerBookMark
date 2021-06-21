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
  isHirerLoggedIn: boolean = false;
  hirerId:any;
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
        this.isHirerLoggedIn = true
        localStorage.setItem('hirer', JSON.stringify(res.user))
        localStorage.setItem('isHirerLoggedIn', 'true')
        this.hirerId = res.user.uid;
        console.log("hirerId is",this.hirerId)
        let hirerIdObj = { "hirerId":res.user.uid}
        let formData:any = Object.assign({},hirerIdObj)
        this.api.signUpCompanyFireBase(formData)
          .subscribe((res) => {
            if (res["status"] == true) {
              console.log("user signup:",this.hirerId)
              this.firebase.isHirerLoggedIn = true;
              localStorage.setItem('hirerId', this.hirerId)
              console.log("helloooo",localStorage.getItem('hirerId'))
              this.router.navigate(['/create-company-profile',localStorage.getItem('hirerId')]);
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
