import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
import { FirebaseService } from './../../services/firebase.service';
// import { ApiServiceService } from '../../services/api-service.service';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:any=[];
  portfolioFlag:boolean=false;
  userId:any;
  userFlag:any;
  
  constructor(public api: ApiService,private _Activatedroute:ActivatedRoute,public firebase : FirebaseService,private router: Router) { }

  async ngOnInit() {
//console.log("portfolio flag",this.portfolioFlag)
    console.log("page loading...")
    console.log("hello user",localStorage.getItem('user'))
    this.userFlag = localStorage.getItem('user');
    console.log("is logged in firebase",this.firebase.isLoggedIn)
    if(localStorage.getItem('user')!=null){
      console.log("is logged in firebase",this.firebase.isLoggedIn)
      let data = (JSON.parse(localStorage.getItem('user')));
console.log(localStorage.getItem('user'))
      console.log("data",data)
      this.getProfileDetails(data["uid"]);
      this.portfolioFlag = true
    }
    this.userId=this._Activatedroute.snapshot.paramMap.get("userId");
    console.log("userId",this.userId)
    if(this.userId!=undefined ){
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

  
}
