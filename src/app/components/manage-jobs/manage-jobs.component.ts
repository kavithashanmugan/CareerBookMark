import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  searchMyJobForm = new FormGroup({
    keywords: new FormControl('', Validators.required)
  })

  myJobs: any = [];
  myClosedJobs: any = [];
  myOpenJobs: any = [];
  noClosedMsg: any;
  noOpenMsg: any;
  hirerId: any;
  searchFlag:boolean=false;
  searchResults: any;
  jobPostedSearchForm = new FormGroup({
    hirerId:new FormControl('',Validators.required),
    jobKeyWords:new FormControl('',Validators.required),
  })
  constructor(private fb: FormBuilder, private router: Router, public api: ApiService, private _Activatedroute: ActivatedRoute) { }

 
  ngOnInit() {



    this.hirerId = (localStorage.getItem('hirerId'))
    this.getClosedJobsByHirer({ "hirerId": this.hirerId });
    this.getOpenJobsByHirer({ "hirerId": this.hirerId });
    this.jobPostedSearchForm = this.fb.group({

      hirerId:this.hirerId,
      jobKeyWords: ['']
    })
  }

  searchPostedJobs() {
    console.log("searching for jobs...")
    console.log(this.jobPostedSearchForm)
    this.api.searchPostedJobs(this.jobPostedSearchForm)
      .subscribe((res) => {
        if (res["status"] == true) {

          this.searchFlag = true;
          console.log("results search jobs",res)
          this.searchResults = res["result"];
        }
      })
  }


  async getJobByHirerId(hirerId) {
    console.log("hirer id for")
    await this.api.getJobByHirerId(hirerId)
      .subscribe((res) => {
        console.log("res", res)
        this.myJobs = res["result"]
        console.log("myJobs", this.myJobs)

      })
  }
  async getClosedJobsByHirer(hirerId) {
    console.log("hirer id for closed", hirerId)
    await this.api.getClosedJobsByHirer(hirerId)
      .subscribe((res) => {
        console.log(" closed jobs res", res)
        this.myClosedJobs = res["result"]
        console.log("myClosedJobs", this.myClosedJobs)
        if (this.myClosedJobs.length == 0 && res["message"]) {
          this.noClosedMsg = res["message"]
        }

      })
  }
  async getOpenJobsByHirer(hirerId) {
    console.log("hirer Id for open", hirerId)
    await this.api.getOpenJobsByHirer(hirerId)
      .subscribe((res) => {
        console.log("open jobs res", res)
        this.myOpenJobs = res["result"]
        console.log("myOpenJobs", this.myOpenJobs)
        if (this.myOpenJobs.length == 0 && res["message"]) {
          this.noOpenMsg = res["message"]
        }
      })
  }

}
