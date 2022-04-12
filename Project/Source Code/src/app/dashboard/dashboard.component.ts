import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlerService } from '../services/event-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
data=[{
  title:"2022SP-COMP_SCI-5542-0001",
  desc: "COMP_SCI-5542-0001-17074-2022SP-Big Data Analytics & Apps",
  announcements:[{
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:false
  },
  {
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:false
  },
  {
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:false
  }],
  unreadAnnouncements:3,
discussions:[{
  title:"Group Formation",
  read:true
},
{
  title:"ICP team Formation",
  read:true
}],
unreadDiscussions:0,
assignments:[{title:"ICP-1 Assignment",
read:true}],
unreadAssignments:0,
},{
  title:"2022SP-COMP_SCI-5542-0001",
  desc: "COMP_SCI-5542-0001-17074-2022SP-Big Data Analytics & Apps",
  announcements:[{
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:false
  },
  {
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:true
  },
  {
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:true
  }],
  unreadAnnouncements:1,
discussions:[{
  title:"Group Formation",
  read:true
},
{
  title:"ICP team Formation",
  read:true
}],
unreadDiscussions:0,
assignments:[{title:"ICP-1 Assignment",
read:true}],
unreadAssignments:0,
},{
  title:"2022SP-COMP_SCI-5542-0001",
  desc: "COMP_SCI-5542-0001-17074-2022SP-Big Data Analytics & Apps",
  announcements:[{
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:true
  },
  {
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:true
  },
  {
    title:"Hack-A-Roo team registration is due midnight today.",
    author:"Syed Jawad Shah",
    directedTo:"All Sections",
    date:"Apr 8, 2022 at 11:37pm",
    info:"Class,\n\tHack-A-Roo team registration is due midnight today. \nHere is the link to register your team. \n'https://forms.gle/p3dr1AuEFyorvNyj6' (Links to an external site.)\nThanks!",
    read:true
  }],
  unreadAnnouncements:0,
discussions:[{
  title:"Group Formation",
  read:true
},
{
  title:"ICP team Formation",
  read:false
}],
unreadDiscussions:1,
assignments:[{title:"ICP-1 Assignment",
read:true}],
unreadAssignments:0,
}];


  constructor(private eventhandler: EventHandlerService,
    private router: Router) { }

  ngOnInit() {
   
  }

  openCourse(index: any){
    this.eventhandler.setCourseValue(null);
    this.eventhandler.setCourseValue(this.data[index]);
    this.router.navigate(['./courses']);
  }

}
