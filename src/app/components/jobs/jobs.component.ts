import { AdminComponent } from './../admin/admin.component';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  searchResults:boolean=false;
  searchResultJobs:any=[];
  jobType:any
  jobId:any;
  allJobs:any 
  githubJobs:any
  jobSearchResult:any
  now = new Date();
  userFlag:any=false;

  
  constructor(private fb:FormBuilder,public api: ApiService,private router: Router,private route:ActivatedRoute) {
   
   }
   jobSearchForm = this.fb.group({
    jobKeyWords:[''],
    location:[''],
    jobType:['']
  })

  ngOnInit() {
    this.jobType=['Full Time','Part Time','Contract'];
    this.getAllJobs();
    this.now;
    if(localStorage.getItem('userId')==null){
this.userFlag=false;
    }
    else {
      this.userFlag = true;
    }
    
    
  }

  getAllJobs(){
    console.log("getting all jobs")
    this.api.getAllJobs()
    .subscribe((res)=>{
      console.log("res",res)
      this.allJobs = res
  })
  }
async getGithubJobs(){
  console.log("hitting jobs")
 
}
  searchJobs(){
    console.log("searching for jobs...")
    console.log(this.jobSearchForm)
    this.api.searchJobs(this.jobSearchForm)
        .subscribe((res)=>{
          if(res["status"] == true){

            this.searchResults = true;
this.searchResultJobs= res["result"];
          }
        })
  }
  applyJob(job){
   
   // alert("Applied for job successfully")
    this.jobId = job.jobId
    console.log("applying for job",this.jobId)
    // let navigationExtras: NavigationExtras = {
    //         state: {
    //   job: job
    //         }
    //       };
    this.router.navigate(['/job-details-apply',this.jobId]);
  }
}

