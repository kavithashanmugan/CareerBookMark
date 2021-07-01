import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { ApiService } from "../../shared/api.service";

@Component({
  selector: 'app-create-company-profle',
  templateUrl: './create-company-profle.component.html',
  styleUrls: ['./create-company-profle.component.css']
})
export class CreateCompanyProfleComponent implements OnInit {
  public Editor = ClassicEditor;
  hirerId:any;
  companyProfileForm = new FormGroup({
    
    
    companyName:new FormControl('',Validators.required),
    companyType:new FormControl('',Validators.required),
    companyWebsite:new FormControl('',Validators.required),
    Industry:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    companyDetails:new FormControl('',Validators.required),
    employees:new FormControl('',Validators.required)
    
   });


  constructor(private formBuilder: FormBuilder,private router: Router,public api: ApiService,private _Activatedroute:ActivatedRoute) { }

  async ngOnInit() {
    this.hirerId=this._Activatedroute.snapshot.paramMap.get("hirerId");
console.log("hirerid",this.hirerId)
    this.companyProfileForm = this.formBuilder.group({
      hirerId:this.hirerId,
      companyName: [''],
      companyType:[''],
      companyWebsite:[''],
      Industry:[''],
      location:[''],
      companyDetails:[''],
      employees:['']
  }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
   

  }
  createCompanyProfile(){
    console.log("signing up....")
    console.log(this.companyProfileForm)
    this.api.createCompanyProfile(this.companyProfileForm)
        .subscribe((res)=>{
          if(res["status"] == true){
          console.log("company portfolio created successfully:")
          this.router.navigate(['/company-portfolio',this.hirerId]);
          }
        })
}

}
