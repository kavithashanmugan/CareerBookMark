import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { ApiService } from "../../shared/api.service";


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  public Editor = ClassicEditor;
  userId:any;
  postJobForm = new FormGroup({
    jobTitle:new FormControl('',Validators.required),
    Company:new FormControl('',Validators.required),
    companyDesc:new FormControl('',Validators.required),
    salaryRange:new FormControl('',Validators.required),
    jobLocation:new FormControl('',Validators.required),
    jobType:new FormControl('',Validators.required),
    jobStartDate:new FormControl('',Validators.required),
    jobRequirements:new FormControl('',Validators.required),
    jobSummary:new FormControl('',Validators.required)
  
    
   });

step:any=1;
  constructor(private formBuilder: FormBuilder,private router: Router,public api: ApiService,private _Activatedroute:ActivatedRoute) { }

  async ngOnInit() {
//     this.userId=this._Activatedroute.snapshot.paramMap.get("userId");
// console.log("userid",this.userId)
//this.userId,
    this.postJobForm = this.formBuilder.group({
      userId:"svzHfUWmbph3Yrfy2wJOCvQ1gH32",
      jobTitle: [''],
      Company:[''],
      companyDesc:[''],
      salaryRange:[''],
      jobLocation:[''],
      jobType:[''],
      jobStartDate:[''],
      jobRequirements:[''],
      jobSummary:[''],
      jobPostedDate:new Date()
  });
   

  }
  // previous(){
  //   this.step = this.step -1 ;
  // }

  // next(){
  //   this.step = this.step +1;
  // }

  postJob(){
console.log("posting job");
this.api.postJob(this.postJobForm)
.subscribe((res)=>{
            if(res["status"] == true){
            console.log("job created successfully:")
            this.router.navigate(['/manage-jobs',1]);
            }
          })
  }
//   createProfile(){
//     console.log("signing up....")
//     console.log(this.postJobForm)
//     this.api.postJob(this.postJobForm)
//         .subscribe((res)=>{
//           if(res["status"] == true){
//           console.log("job created successfully:")
//           this.router.navigate(['/manage-jobs',this.userId]);
//           }
//         })
// }

}
