import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
import { FirebaseService } from './../../services/firebase.service';
// import { ApiServiceService } from '../../services/api-service.service';

interface Portfolio{
  fullName:string;
  phoneNumber:Number;
    website:String;
    emailId:String;
    jobTitle:String;
    location:String;
    summary:String;
    experience:String;
    education:String;
    skills:String;

}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:any=[];
  portfolioFlag:boolean=false;
  userId:any;
  editProfile:boolean=false;
  constructor(public api: ApiService,private _Activatedroute:ActivatedRoute,public firebase : FirebaseService,private router: Router) { }

  async ngOnInit() {

    console.log("page loading...")
    if(this.firebase.isLoggedIn==true){
      let data = (JSON.parse(localStorage.getItem('user')));
console.log(localStorage.getItem('user'))
      console.log("data",data)
      this.getProfileDetails(data["uid"]);
      this.portfolioFlag = true
    }
    this.userId=this._Activatedroute.snapshot.paramMap.get("userId");
    console.log("userId",this.userId)
    if(this.userId!=undefined && this.firebase.isLoggedIn==true){
      this.getProfileDetails(this.userId); 
      this.portfolioFlag = true
    }
 
  }

  getProfileDetails(userId){
    console.log("hitting profile......")
this.api.getProfile(userId)
    .subscribe((res)=>{
      if(res["status"] == true && res["result"]!=null){
        console.log("result...",res["result"])
      this.portfolio = res["result"]
      
      }
    })
  }

  updateProfile(){
    console.log("routing to edit profile")
    this.router.navigate(['/edit-profile',localStorage.getItem('userId')]);
    //this.editProfile = true;
   
  }

  updateExperience(){}


  updateEducation(){}
  updateSkills(){

  }
  

  getMatchingJobs(){

  }
}
