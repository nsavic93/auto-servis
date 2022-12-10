import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auto-servis';
  test = false;
  isLoggedValue = false;
  constructor(private loginService: LoginService, private router: Router , private _location: Location) {
    this.checkLoginStatus();
    this.loginService.isLoggedValue.subscribe((data) => {
      this.isLoggedValue = data;
      
    });
  }
  ngBeforeInit() {
    this.checkLoginStatus();
  }
  ngOnInit(): void {}
  logout() {
    this.loginService.logout(localStorage.getItem('token')).subscribe((data) => {
      console.log(data);
      this.loginService.setLoginStatus(false);
      this.router.navigate(['/', 'login']);
    });
  }
  checkLoginStatus() {
    this.loginService.isLoggedIn(localStorage.getItem('token')).subscribe(
      (data) => {
        if (data.msg == 'OK') {
          this.loginService.user = data.user
          this.loginService.setLoginStatus(true);
          
        }else{
          this.loginService.setLoginStatus(false);
          
        }
      },
      (err) => {},
      () => {
        this.test = true
      }
    );
  }
  back(){
    this._location.back();
  }
}
