import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../shared/api.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-track-my-jobs',
  templateUrl: './track-my-jobs.component.html',
  styleUrls: ['./track-my-jobs.component.css']
})
export class TrackMyJobsComponent implements OnInit {
userId:any;
appliedJobs:[];
  constructor(public api: ApiService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.appliedJobs=[];
    console.log("hello applied jobs",this.appliedJobs)
    this.userId=localStorage.getItem('userId')
    this.getAppliedJobs(this.userId);
  }
  getAppliedJobs(userId){
    this.appliedJobs.length=0;
    console.log("get applied jobs for userId",userId)
    this.api.getAppliedJobs(userId)
    .subscribe((data)=>{
      console.log("res res",data)
      this.appliedJobs.splice(0,this.appliedJobs.length);
                if(data["status"] == true){
                console.log("applied jobs retrieved successfully")
                console.log("hello applied jobs before inserting",this.appliedJobs)
                console.log("result length",data["result"].length)
                this.appliedJobs=data["result"];
                console.log("applied jobs",this.appliedJobs);
                }
              })
  }
}
