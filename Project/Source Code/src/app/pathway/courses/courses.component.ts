import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
data=[{
  name:"COMP-SCI 5101 - Discrete Structures Review for Graduate Students",
  Instruction_Mode: "Classroom Based",
Seats_Remaining: 27,
Location: "On-Campus",
Units: 1,
Class	:13564,
Section	:"0001-LEC Eight Wk 1",
Days_Times	:"Fr 9:00AM - 12:00PM",
Room	:"Education-Rm 00244",
Instructor	:"Rafida Zaman",
Meeting_Dates	:"01/18/2022 - 03/11/2022",
Status:"open"
},{
  name:"COMP-SCI 5102 - Operating Systems Review for Graduate Students",
  Instruction_Mode: "Classroom Based",
Seats_Remaining: 17,
Location: "On-Campus",
Units: 1,
Class	:13572,
Section	:"0001-LEC Eight Wk 1",
Days_Times	:"Sa 9:00AM - 12:00PM",
Room	:"Katz Hall-Rm 00008",
Instructor	:"Rafida Zaman",
Meeting_Dates	:"01/18/2022 - 03/11/2022",
Status:"open"
},{
  name:"COMP-SCI 5572 - Mobile Computing",
  Instruction_Mode: "Wholly Online Asynchronous",
Seats_Remaining: 0,
Location: "",
Units: 3,
Class	:16792,
Section	:"0001-LEC Regular",
Days_Times	:"TBA",
Room	:"Internet Class",
Instructor	:"Muazzam Khattak",
Meeting_Dates	:"01/18/2022 - 05/13/2022",
Status:"closed"
}]
  constructor() { }

  ngOnInit(): void {
  }

  moduleChange(link: any){}

}
