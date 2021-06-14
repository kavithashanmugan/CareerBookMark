import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upskill',
  templateUrl: './upskill.component.html',
  styleUrls: ['./upskill.component.css']
})
export class UpskillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("user logged in",localStorage.getItem('user'))
  }

}
