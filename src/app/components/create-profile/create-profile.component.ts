import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { ApiService } from "../../shared/api.service";


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  public Editor = ClassicEditor;
  userId:any;
  userProfileForm = new FormGroup({
    fullName:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    website:new FormControl('',Validators.required),
    emailId:new FormControl('',Validators.required),
    jobTitle:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    summary:new FormControl('',Validators.required),
    experience:new FormControl('',Validators.required),
    education:new FormControl('',Validators.required),
    skills:new FormControl('',Validators.required)
    
   });


  constructor(private formBuilder: FormBuilder,private router: Router,public api: ApiService,private _Activatedroute:ActivatedRoute) { }

  async ngOnInit() {
    this.userId=this._Activatedroute.snapshot.paramMap.get("userId");
console.log("userid",this.userId)
    this.userProfileForm = this.formBuilder.group({
      userId:this.userId,
      fullName: [''],
      phoneNumber:[''],
      website:[''],
      emailId:[''],
      jobTitle:[''],
      location:[''],
      summary:[''],
      experience:[''],
      education:[''],
      skills:['']
  }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
   

  }
  createProfile(){
    console.log("signing up....")
    console.log(this.userProfileForm)
    this.api.createProfile(this.userProfileForm)
        .subscribe((res)=>{
          if(res["status"] == true){
          console.log("user portfolio created successfully:")
          this.router.navigate(['/portfolio',this.userId]);
          }
        })
}

}
