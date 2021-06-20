import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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


  constructor(private _Activatedroute:ActivatedRoute,public api: ApiService,private router: Router) { }

  ngOnInit(){
    this.userId=this._Activatedroute.snapshot.paramMap.get("userId");
    this.api.getProfile(this.userId)
    .subscribe((res)=>{
      if(res["status"] == true && res["result"]!=null){
        console.log("result...",res["result"])
        let data = res["result"]
      this.userProfileForm = new FormGroup({
        userId:new FormControl(this.userId),
        fullName:new FormControl(data['fullName']),
        phoneNumber:new FormControl(data['phoneNumber']),
        website:new FormControl(data['website']),
        emailId:new FormControl(data['emailId']),
        jobTitle:new FormControl(data['jobTitle']),
        location:new FormControl(data['location']),
        summary:new FormControl(data['summary']),
        experience:new FormControl(data['experience']),
        education:new FormControl(data['education']),
        skills:new FormControl(data['skills'])
        
       });
      
      }
    })
   
  }

  getProfileDetails(userId){
    console.log("hitting profile......")

  }
  updateProfile(){
    this.api.updateProfile(this.userProfileForm)
    .subscribe((res)=>{
      if(res["status"] == true){
      console.log(" portfolio updated successfully:")
     
        this.router.navigate(['/portfolio',this.userId]);
  
     
      }
    })
  }

}
