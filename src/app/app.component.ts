import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TakeatWeb';
  user: BehaviorSubject<any>;

  constructor(private loginServ: LoginService) { }
  
  ngOnInit() {
    let loginUser = localStorage.getItem('user');
    this.loginServ.emitLoginUser(loginUser);
    this.loginServ.loginUser.subscribe((result: any) => {
      this.user = result;
      console.log(this.user);
    });
  }
}
