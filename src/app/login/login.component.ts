'use strict';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private loginServ: LoginService, private router: Router) {

  };

  ngOnInit() {
    
  };

  LoginToTakeat() {
    return this.loginServ.LoginToTakeat(this.email, this.password).subscribe((result: any) => {
      if(result.token !== undefined) {
        localStorage.setItem('user', JSON.stringify(result.User));
        localStorage.setItem('token', result.token);
        this.loginServ.emitLoginUser(result.User);
      };
      
      this.router.navigateByUrl('/home');
    });
  };
}
