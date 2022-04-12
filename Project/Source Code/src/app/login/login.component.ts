import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

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
    let email = this.loginForm.controls['email'].value;
    let pass = this.loginForm.controls['password'].value;
    console.log('email: ', email);
    console.log('password: ', pass);
    if(email == this.userData.email && pass == this.userData.password){
      console.log("user logged in successfully");
    }
  }
}
