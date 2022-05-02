import { Component, SimpleChange } from '@angular/core';
import jwt_decode from "jwt-decode";
import { EventHandlerService } from './services/event-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  decodedJWT :any;
  token:any;
  loginVar:any;
  constructor(private eventhandler: EventHandlerService,){}

  ngOnInit(): void {
    this.loginVar = sessionStorage.getItem("login");
    this.eventhandler.getLoginReset().subscribe((status: any) => {
      if (status) {
        this.loginVar = sessionStorage.getItem("login");
      }
    });
  if (sessionStorage.getItem("token")!=null) {
    //set token header
    //setAuthToken(localStorage.jwtToken);
    //decode token
    this.token = sessionStorage.getItem("token");
    this.decodedJWT = jwt_decode(this.token);
    console.log("token",this.decodedJWT);
    //set user
    //store.dispatch(setCurrentUser(decoded));
  
    //check expiry
    const currentTime = Date.now() / 1000;
    if (this.decodedJWT.exp < currentTime) {
      //logout user
     // store.dispatch(logoutUser());
      //clear profile
     // store.dispatch(clearCurrentProfile());
     sessionStorage.setItem("login", "false");
     
     this.eventhandler.setLoginReset("false");
      //redirect to login
      window.location.href = "/login";
      
    }else{
      sessionStorage.setItem("login", "true");
    }
  }
}
ngOnChanges(changes: { [propName: string]: SimpleChange }){
  this.loginVar = sessionStorage.getItem("login");
}

logout(){
  this.token = null;
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("JWTToken");
  sessionStorage.setItem("login", "false");
  this.eventhandler.setLoginReset("false");
  this.loginVar = sessionStorage.getItem("login");
}
}
