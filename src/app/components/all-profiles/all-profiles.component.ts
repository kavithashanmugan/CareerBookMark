import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from "../../shared/api.service";

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {

  allProfiles:any;
  hirerId:any;
  Id:any;
  constructor(private modalService: NgbModal,public api: ApiService) {}

  ngOnInit(){

    this.hirerId = localStorage.getItem('hirerId') 
    this.getAllProfiles()
  }

  getAllProfiles(){
    this.Id={"Id":this.hirerId}
    this.api.getAllProfiles(this.Id)
    .subscribe((res)=>{
      console.log("res",res)
      this.allProfiles = res["result"]
      console.log("profile",this.allProfiles)
     
  })
  }

}
