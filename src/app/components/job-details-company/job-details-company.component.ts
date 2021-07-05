import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-job-details-company',
  templateUrl: './job-details-company.component.html',
  styleUrls: ['./job-details-company.component.css']
})
export class JobDetailsCompanyComponent implements OnInit {
  jobId: any;
  jobStatus: any;
  closedJob: boolean = false;
  data: any;
  hirerId: any;
  constructor(private route: ActivatedRoute, public api: ApiService,private router: Router) { }

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get("jobId")
    this.getJobById(this.jobId)
    this.hirerId = (localStorage.getItem('hirerId'))

  }
  getJobById(jobId) {
    console.log("hitting getting job by jobid......")
    this.api.getJobById(jobId)
      .subscribe((res) => {
        if (res["status"] == true && res["result"] != null) {
          console.log("job result...", res["result"])
          this.data = res["result"]
          this.jobStatus = res["result"].jobStatus;
          console.log("test", this.data.jobTitle)
          console.log("job status", this.jobStatus)
          if (this.jobStatus == "Closed") {
            this.closedJob = true;
          }

        }
      })
  }
  viewCandidates() {
    this.router.navigate(['/manage-profiles-company',this.jobId]);
    //alert("view candidates");
    
  }
  
  closeJob() {
console.log("hitting close job")
    console.log("job id for",this.jobId)
    let jobObj = {"jobId":this.jobId}
    console.log("jobobj",jobObj)
    this.api.closeJob(jobObj)
      .subscribe((res) => {
        console.log("res", res)
        this.jobStatus = res["result"].jobStatus;
        console.log("myJobs closed", this.jobStatus)
        this.ngOnInit();



      })
  }
}
