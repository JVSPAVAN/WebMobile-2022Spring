import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventHandlerService } from '../services/event-handler.service';
import { RequestService } from '../services/requestService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userData = {
    email: 'helloworld',
    password: '12345',
  };
  url = '';

  constructor(
    private fb: FormBuilder,
    private reqService: RequestService,
    private router: Router,
    private eventhandler: EventHandlerService
  ) {}

  ngOnInit(): void {
    this.formInitializer();
  }
  formInitializer() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  login() {
    let userEmail = this.loginForm.controls['email'].value;
    let userPass = this.loginForm.controls['password'].value;
    console.log('email: ', userEmail);
    console.log('password: ', userPass);
    let userData = { email: userEmail, password: userPass };
    this.reqService.loginUser(userData).subscribe((data: any) => {
      if (data) {
        console.log('user logged in successfully', data);
        sessionStorage.setItem('JWTToken', data.token);
        sessionStorage.setItem('token', data.token.slice(7));
        sessionStorage.setItem('login', 'true');
        this.eventhandler.setLoginReset('false');
        this.router.navigate(['/' + 'home']);
        this.reqService.getProfile().subscribe((userData: any) => {
          if (userData) {
            console.log("new data",userData);
            sessionStorage.setItem("profile",JSON.stringify(userData));
          }
        });
      }
    });
    // if(userEmail == this.userData.email && userPass == this.userData.password){
    //   console.log("user logged in successfully");
    // }
  }
}
