import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from 'src/app/services/event-handler.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})
export class CourseHomeComponent implements OnInit {
  data:any;
  link:any;
  constructor(private eventhandler: EventHandlerService) { }

  ngOnInit(){
    this.link = "Home";
    this.eventhandler.getCourseValue().subscribe((val: any) => {
      if (val) {
        this.data = val;
        console.log('data 2 ', this.data);
      }
    });
  }

}
