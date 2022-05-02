import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventHandlerService } from '../services/event-handler.service';
import { RequestService } from '../services/requestService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  username = 'DemonSlayer';
  url = '';
  data: any;
  show: any;
  constructor(
    private router: Router,
    private reqService: RequestService,
    private eventhandler: EventHandlerService
  ) {}

  ngOnInit() {
    this.url = this.router.url;
    if (sessionStorage.getItem('login') == 'true') {
      this.show = true;
    } else {
      this.show = false;
    }
    //console.log("url ",this.url);
    this.eventhandler.getLoginReset().subscribe((status: any) => {
      if (status) {
        if (sessionStorage.getItem('login') == 'true') {
          this.show = true;
        } else {
          this.show = false;
        }
        this.delay(100).then((any) => {
          this.reqService.getProfile().subscribe((data: any) => {
            if (data) {
              this.data = data;
              console.log('profile data ', data);
              this.show = true;
              sessionStorage.setItem("profile",JSON.stringify(this.data));
            }
          });
        });
        //this.loginVar = sessionStorage.getItem("login");
      }
    });
    this.reqService.getProfile().subscribe((data: any) => {
      if (data) {
        this.data = data;
        console.log('profile data ', data);
        this.show = true;
        sessionStorage.setItem("profile",JSON.stringify(this.data));
      }
    });
  }

  async delay(ms: number) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), ms)).then(
      () => console.log('fired')
    );
  }

  logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("JWTToken");
    sessionStorage.setItem("login", "false");
    this.eventhandler.setLoginReset("false");
    window.location.href = "/login";
  }

  moduleChange(link: any) {
    this.url = link;
    console.log('url ', this.url);
    this.router.navigate(['./' + link]);
  }
}
