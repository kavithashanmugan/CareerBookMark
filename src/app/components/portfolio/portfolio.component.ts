import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
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
    education:String

}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio?: Portfolio;

  Fullname:any = "Kavitha Shanmugan";
  Title:any = "Blockchain Developer"
  constructor(public api: ApiService) { }

  async ngOnInit() {
    try {
      this.portfolio = await this.api.getProfile();
    } catch (err) {}
  }

  getProfileDetails(){

  }
}
