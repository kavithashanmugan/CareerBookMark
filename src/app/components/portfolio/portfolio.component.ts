import { Component, OnInit } from '@angular/core';
// import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  Fullname:any = "Kavitha Shanmugan";
  Title:any = "Blockchain Developer"
  constructor() { }

  ngOnInit(): void {
  }

  getProfileDetails(){

  }
}
