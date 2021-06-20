import { AdminComponent } from './../admin/admin.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  searchResults:boolean=false;
  jobType:any
  allJobs:any 
  githubJobs:any
  jobSearchResult:any
  now = new Date();

  
  constructor(private fb:FormBuilder,public api: ApiService,private router: Router) {
   
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
    console.log("thisss",this.now)
    
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
  // this.githubJobs = await axios.get('https://jobs.github.com/positions.json?search=node')
  // console.log("github jobs",this.githubJobs);
  // this.api.getGithubJobs()
  // .subscribe((res)=>{
  //   this.githubJobs = res
  //   this.searchResults = true
  // })
}
  searchJobs(){
    console.log(this.jobSearchForm)
    this.api.searchJobs(this.jobSearchForm)
        .subscribe((res)=>{
          if(res["status"] == true){

            this.searchResults = true;
this.jobSearchResult= res["result"];
         // console.log("user portfolio created successfully:")
          //this.router.navigate(['/portfolio',this.userId]);
          }
        })
  }
  applyJob(){
    console.log("applying for job")
    alert("Applied for job successfully")
  }
}
//   searchJobs(){
// this.searchResults=true;
// this.allJobs = [{"jobTitle":"Junior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"},
//     {"jobTitle":"Blockchain Developer","jobPostedOn":"May 10 2021","company":"ABS Solutions"},
//     {"jobTitle":"Application Support","jobPostedOn":"May 22 2021","company":"ABS Solutions"},
//     {"jobTitle":"Frontend Developer","jobPostedOn":"May 14 2021","company":"ABS Solutions"},
//     {"jobTitle":"Java Developer","jobPostedOn":"May 18 2021","company":"ABS Solutions"}
  
//   ];
//   }

