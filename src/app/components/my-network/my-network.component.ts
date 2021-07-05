import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from "../../shared/api.service";


@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.css']
})
export class MyNetworkComponent implements OnInit {
allProfiles:any;
userId:any;
Id:any;
  constructor(private modalService: NgbModal,public api: ApiService) {}

  ngOnInit(){
    this.userId = (localStorage.getItem('userId'))
    this.getAllProfiles()
  }

  getAllProfiles(){
    //this.Id={"Id":this.userId}
    this.api.getAllProfiles(this.userId)
    .subscribe((res)=>{
      console.log("res",res)
      this.allProfiles = res["result"]
      console.log("porfile",this.allProfiles)
     
  })
  }
 
}
