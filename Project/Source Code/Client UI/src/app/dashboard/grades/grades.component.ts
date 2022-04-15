import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from 'src/app/services/event-handler.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
data:any;
totalOf=0;
total=0;
percentage=0.0;
  constructor(private eventhandler: EventHandlerService) { }

  ngOnInit(): void {
    console.log("data  ",this.data);
    this.eventhandler.getCourseValue().subscribe((val: any) =>{
      if(val){
        this.data = val;
        console.log("data 3 ",this.data);
      }
    });
    console.log("data 1 ",this.data);
    this.data = this.data.grades;
    console.log("data 2 ",this.data);
    let val=0;
    this.data.forEach((element: any) => {
      val = Math.floor(val + (element.points ? parseInt(element.points) : 0));
      
    });
    this.total = val;
    this.totalOf = Math.floor(this.data.length * 100);
    this.percentage = parseFloat(Math.round((this.total / this.totalOf) * 100).toFixed(2));
  }

}
