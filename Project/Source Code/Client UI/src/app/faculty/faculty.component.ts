import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {
data=[{
  name: "coretta mohammad",
  designation:"Assist. Professor",
  email:"coretta@umsystem.edu",
  contact:"+1 470 884 0851",
  subjects:"IT"
},{
  name: "Ahmed Alanazi",
  designation:"Professor",
  email:"ahmed@umsystem.edu",
  contact:"+1 470 884 0851",
  subjects:"Web dev"
},{
  name: "Cheng",
  designation:"TA",
  email:"cehng@umsystem.edu",
  contact:"+1 470 884 0851",
  subjects:"Web dev"
}]
  constructor() { }

  ngOnInit(): void {
  }

}
