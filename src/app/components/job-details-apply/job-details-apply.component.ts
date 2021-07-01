import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../shared/api.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-job-details-apply',
  templateUrl: './job-details-apply.component.html',
  styleUrls: ['./job-details-apply.component.css']
})
export class JobDetailsApplyComponent implements OnInit {
data:any;
jobId:any;
userId:any;
jobStatus:any;
closedJob:boolean=false;
portfolio:[]=[];
  constructor(private route: ActivatedRoute, private router: Router,public api: ApiService,private modalService:NgbModal) {
      
   }

  ngOnInit() {
   this.jobId= this.route.snapshot.paramMap.get("jobId")
    console.log("job is.....",this.jobId)
    this.userId = localStorage.getItem('userId')
    if(this.jobId!=undefined ){
      this.getJobById(this.jobId); 
      this.getProfileDetails(this.userId);
    }
  }
  
  getJobById(jobId){
    console.log("hitting getting job by jobid......")
this.api.getJobById(jobId)
    .subscribe((res)=>{
      if(res["status"] == true && res["result"]!=null){
        console.log("job result...",res["result"])
      this.data = res["result"]
      this.jobStatus = res["result"].jobStatus;
      console.log("test",this.data.jobTitle)
      console.log("job status",this.jobStatus)
      if(this.jobStatus == "Closed"){
        this.closedJob = true;
      }
      
      }
    })
  }
  getProfileDetails(userId){
    console.log("hitting profile......")
this.api.getProfile(userId)
    .subscribe((res)=>{
      if(res["status"] == true && res["result"]!=null){
        console.log("result..profile.",res["result"])
      this.portfolio = res["result"]
      console.log("fullname",this.portfolio["fullName"])
      
      }
    })
  }
  applyingJob(){
    console.log("job id",this.jobId)
   
    console.log("userId",this.userId)
console.log("applying job")
// let JobID = {"jobId":this.jobId}
// let UserID = {"userId":this.userId}
let requestObj = {"jobId":this.jobId,"userId":this.userId,"fullName":this.portfolio["fullName"],"userJobTitle":this.portfolio["jobTitle"],"userLocation":this.portfolio["location"],"jobTitle":this.data.jobTitle,"jobLocation":this.data.jobLocation,"Company":this.data.Company}
this.api.applyJob(requestObj)
.subscribe((res)=>{
  console.log("result of apply job s",res)
  if(res["status"] == true && res["result"]!=null){
    alert("applied for job successfully")
    console.log("applied result. is.....",res["result"])
    this.router.navigateByUrl('/track-my-jobs');
  }
  else{
    alert("job application failed")
  }
})
  }




}
