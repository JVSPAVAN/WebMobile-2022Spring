import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
username="DemonSlayer";
url="";
  constructor(private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
    //console.log("url ",this.url);
  }

  moduleChange(link:any){
    this.url = link;
    console.log("url ",this.url);
    this.router.navigate(["./"+link]);
    
  }

}
