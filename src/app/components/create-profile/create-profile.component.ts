import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  public Editor = ClassicEditor;
  userProfileForm = new FormGroup({
    fullName:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    website:new FormControl('',Validators.required),
    emailId:new FormControl('',Validators.required),
    jobTitle:new FormControl('',Validators.required),
    location:new FormControl('',Validators.required),
    summary:new FormControl('',Validators.required),
    experience:new FormControl('',Validators.required),
    education:new FormControl('',Validators.required)
    
   });


  constructor(private formBuilder: FormBuilder,private router: Router) { }

  async ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      fullName: [''],
      phoneNumber:[''],
      website:[''],
      emailId:[''],
      jobTitle:[''],
      location:[''],
      resume:[''],
      summary:[''],
      experience:[''],
      education:['']
  }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
   

  }
onSubmit(){

}
onFileChange(){

}
}
