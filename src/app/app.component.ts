import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Location } from '@angular/common';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faCoffee = faCoffee;
  faBars = faBars
  faCircleXmark = faCircleXmark
  title = 'auto-servis';
  test = false;
  isLoggedValue = false;
  admin = false
  mobileNav = false
  constructor(private loginService: LoginService, private router: Router, private _location: Location) {
    this.checkLoginStatus();
    this.loginService.isLoggedValue.subscribe((data) => {
      this.isLoggedValue = data;
      if (this.isLoggedValue) {
        this.loginService.isAdminValue.subscribe((data) => {
          this.admin = data;

        });
      }
    });
    this.admin = localStorage.getItem("isAdmin") == 'true' ? true : false
  }
  ngBeforeInit() {
    this.checkLoginStatus();

  }
  ngOnInit(): void { }
  logout() {
    this.loginService.logout(localStorage.getItem('token')).subscribe((data) => {
      console.log(data);
      this.loginService.setLoginStatus(false);
      this.router.navigate(['/', 'login']);
      localStorage.setItem("isAdmin", 'false')
      this.admin = false
      this.loginService.setAdminStatus(false)
    });
  }
  isAdmin() {
    let sid = localStorage.getItem('token');
    this.loginService.isAdmin(sid).subscribe((data) => {
      if (data.msg == "OK") {
        console.log("OK");
        this.loginService.setAdminStatus(true)
        localStorage.setItem("isAdmin", 'true')
      } else {
        this.loginService.setAdminStatus(false)
        localStorage.setItem("isAdmin", 'false')
      }
      this.admin = localStorage.getItem("isAdmin") == 'true' ? true : false
    })
  }
  checkLoginStatus() {
    console.log("ASD");

    this.loginService.isLoggedIn(localStorage.getItem('token')).subscribe(
      (data) => {
        if (data.msg == 'OK') {
          this.loginService.user = data.user
          this.loginService.setLoginStatus(true);
        } else {
          this.loginService.setLoginStatus(false);
        }
        this.isAdmin()
      },
      (err) => { },
      () => {
        this.test = true
      }
    );
  }
  back() {
    this._location.back();
  }
  openMobileNav(){
    this.mobileNav = true;
  }
  closeMobileNav(){
    this.mobileNav = false;
  }
}
