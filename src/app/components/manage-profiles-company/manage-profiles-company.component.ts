import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-manage-profiles-company',
  templateUrl: './manage-profiles-company.component.html',
  styleUrls: ['./manage-profiles-company.component.css']
})

export class ManageProfilesCompanyComponent implements OnInit {
  jobId:any;
  noCandidates:any;
  noAppliedCandidate:boolean=true;
  appliedCandidates:[]=[];

  shortListedStatus:boolean=false;

  noShortListedCandidate:boolean=true;
  noShortListed:any;
  shortListedCandidates:[]=[];

  noRejectedCandidate:boolean=true;
  noRejected:any;
  rejectedCandidates:[]=[];
  constructor(private router: Router, public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.jobId = this.route.snapshot.paramMap.get("jobId");
    this.viewAppliedCandidates(this.jobId);
    this.viewShortListedCandidates(this.jobId);
    this.viewRejectedCandidates(this.jobId);

    console.log("finalllyyy", this.noRejectedCandidate)
  }

  viewAppliedCandidates(jobId){
    this.api.getAppliedCandidates(jobId)
.subscribe((res)=>{
  console.log("result of apply job s",res)
  if(res["status"] == true && res["result"].length!=0){
    this.noAppliedCandidate = false;
    console.log("applied result. is.....",res["result"])
    this.appliedCandidates = res["result"];
   
  }
  else{
    this.noAppliedCandidate = true;
    this.noCandidates="No Candidates"
  }
})
  }

  viewShortListedCandidates(jobId){
    this.api.getShortListedCandidates(jobId)
    .subscribe((res)=>{
      console.log("result of apply job s",res)
      if(res["status"] == true && res["result"].length!=0){
        this.noShortListedCandidate = false;
        console.log("shortlisted result. is.....",res["result"])
        this.shortListedCandidates = res["result"];
       
      }
      else{
        this.noShortListedCandidate = true;
        this.noShortListed="No candidates shortlisted"
      }
    })
  }
  viewRejectedCandidates(jobId){
    this.api.getRejectedCandidates(jobId)
    .subscribe((res)=>{
      console.log("result rejected candidates",res)
      if(res["status"] == true && res["result"].length!=0){
        this.noRejectedCandidate = false;
        console.log("rejected result. is.....",res["result"])
        this.rejectedCandidates = res["result"];
       
      }
      else{
        this.noRejectedCandidate = true;
        this.noRejected="No candidates rejected";
        console.log("finalllyyy 2", this.noRejectedCandidate)
      }
    })
  }

  shortListCandidates(candidate){
    console.log("job id",this.jobId)
   
    console.log("userId",candidate.userId)
console.log("shortlisting candidate")
let requestObj = {"jobId":this.jobId,"userId":candidate.userId}
this.api.shortListCandidates(requestObj)
.subscribe((res)=>{
  console.log("result of apply job s",res)
  if(res["status"] == true && res["result"]!=null){
    alert("candidate shortlisted")
    console.log("applied result. is.....",res["result"])
    this.shortListedStatus = true;
    this.ngOnInit();
   // this.router.navigateByUrl('/track-my-jobs');
  }
  else{
    alert("job application failed")
  }
})
  }
  rejectCandidates(candidate){
    console.log("job id",this.jobId)
   
    console.log("userId",candidate.userId)
console.log("rejecting candidate")
let requestObj = {"jobId":this.jobId,"userId":candidate.userId}
this.api.rejectCandidates(requestObj)
.subscribe((res)=>{
  console.log("result of reject canfdidates",res)
  if(res["status"] == true && res["result"]!=null){
    alert("candidate rejected")
    console.log("rejected result is.....",res["result"])
    this.shortListedStatus = true;
    this.ngOnInit();
   // this.router.navigateByUrl('/track-my-jobs');
  }
  else{
    alert("reject candidate failed")
  }
})
  }

}
