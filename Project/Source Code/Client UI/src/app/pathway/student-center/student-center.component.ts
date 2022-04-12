import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-center',
  templateUrl: './student-center.component.html',
  styleUrls: ['./student-center.component.scss']
})
export class StudentCenterComponent implements OnInit {
  url="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  moduleChange(link:any){
    this.url = this.router.url;
    console.log("url ",this.url);
    this.router.navigate([this.url+"/" +link]);
    
  }

}
