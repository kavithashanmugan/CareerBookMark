import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

  
  constructor(private fb:FormBuilder,public api: ApiService,private router: Router) {
   
   }
   jobSearchForm = this.fb.group({
    jobKeyWords:[''],
    location:[''],
    jobType:['']
  })

  ngOnInit() {
    this.jobType=['Full Time','Part Time','Contract'];
    
  }

  searchJobs(){
this.searchResults=true;
this.allJobs = [{"jobTitle":"Junior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"},
    {"jobTitle":"Blockchain Developer","jobPostedOn":"May 10 2021","company":"ABS Solutions"},
    {"jobTitle":"Application Support","jobPostedOn":"May 22 2021","company":"ABS Solutions"},
    {"jobTitle":"Frontend Developer","jobPostedOn":"May 14 2021","company":"ABS Solutions"},
    {"jobTitle":"Java Developer","jobPostedOn":"May 18 2021","company":"ABS Solutions"}
  
  ];
  }
}
