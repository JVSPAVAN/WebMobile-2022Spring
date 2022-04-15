import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from 'src/app/services/event-handler.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
data:any;
  constructor(private eventhandler: EventHandlerService) { }

  ngOnInit(){
    console.log("data  ",this.data);
    this.eventhandler.getCourseValue().subscribe((val: any) =>{
      if(val){
        this.data = val;
        console.log("data 3 ",this.data);
      }
    });
    console.log("data 1 ",this.data);
    this.data = this.data.assignments;
    console.log("data 2 ",this.data);
  }

}
