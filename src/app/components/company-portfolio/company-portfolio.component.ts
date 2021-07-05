import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
import { FirebaseService } from './../../services/firebase.service';
@Component({
  selector: 'app-company-portfolio',
  templateUrl: './company-portfolio.component.html',
  styleUrls: ['./company-portfolio.component.css']
})
export class CompanyPortfolioComponent implements OnInit {
  companyPortfolio:any=[];
  companyPortfolioFlag:boolean=false;
  hirerId:any;
  userView:boolean=false;

  constructor(public api: ApiService,private _Activatedroute:ActivatedRoute,public firebase : FirebaseService,private router: Router) { }

  async ngOnInit(){

    console.log("page loading...")
    console.log("company is viewed by",this.userView)
    if(localStorage.getItem('hirer')!=null){
      let data = (JSON.parse(localStorage.getItem('hirer')));
console.log(localStorage.getItem('hirer'))
      console.log("data",data)
      this.getCompanyProfileDetails(data["uid"]);
      this.companyPortfolioFlag = true
      this.userView=false;
    }
    this.hirerId=this._Activatedroute.snapshot.paramMap.get("hirerId");
    console.log("hirerId for company",this.hirerId)
    if(this.hirerId!=undefined && this.firebase.isHirerLoggedIn==true){
      this.getCompanyProfileDetails(this.hirerId); 
      this.companyPortfolioFlag = true
      this.userView=false;
    }
    if(this.hirerId!=undefined){
      this.getCompanyProfileDetails(this.hirerId); 
      this.userView = true
    }
  }
  getCompanyProfileDetails(hirerId){
    console.log("hitting profile......")
this.api.getCompanyProfile(hirerId)
    .subscribe((res)=>{
      if(res["status"] == true && res["result"]!=null){
        console.log("result...",res["result"])
      this.companyPortfolio = res["result"]
      
      }
    })
  }

  updateCompanyProfile(){
    console.log("routing to edit profile")
    this.router.navigate(['/edit-company-profile',localStorage.getItem('hirerId')]);
    
    //this.editProfile = true;
   
  }
}
