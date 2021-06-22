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
    keywords:new FormControl('',Validators.required)
  })
  constructor(private formBuilder: FormBuilder,private router: Router,public api: ApiService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(){
    this.searchMyJobForm = this.formBuilder.group({
      keywords: [''],
    })
  }

}
