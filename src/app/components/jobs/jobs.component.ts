import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  allJobs:any = [{"jobTitle":"Senior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"},
  {"jobTitle":"Senior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"},
  {"jobTitle":"Senior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"},
  {"jobTitle":"Senior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"},
  {"jobTitle":"Senior Developer","jobPostedOn":"May 02 2021","company":"ABS Solutions"}

]
  constructor() { }

  ngOnInit(): void {
  }

  search(){

  }
}
