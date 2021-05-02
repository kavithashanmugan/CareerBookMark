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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    emailId:new FormControl('', Validators.required),
    jobTitle:new FormControl('', Validators.required),
    location:new FormControl('', Validators.required),
    resume:new FormControl('', Validators.required),
    summary:new FormControl('', Validators.required)
    
   });


  constructor(private formBuilder: FormBuilder,private router: Router) { }

  async ngOnInit() {
    this.userProfileForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      phoneNumber:[''],
      emailId:[''],
      jobTitle:[''],
      location:[''],
      resume:[''],
      summary:['']
  }, {
      //validator: MustMatch('password', 'confirmPassword')
  });
   

  }
onSubmit(){

}
onFileChange(){

}
}
