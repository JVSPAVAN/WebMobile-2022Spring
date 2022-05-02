import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from 'src/app/services/event-handler.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
userData:any;
val:any;
username = "DemonSlayer";
  constructor(private eventhandler: EventHandlerService,) { }

  ngOnInit(): void {
    this.eventhandler.getLoginReset().subscribe((status: any) => {
      if (status) {
        this.val = sessionStorage.getItem("profile");
       this.userData = JSON.parse(this.val);
      }
    });
    this.val = sessionStorage.getItem("profile");
    this.userData = JSON.parse(this.val);
  }

}
