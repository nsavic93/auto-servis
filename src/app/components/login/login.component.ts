import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedValue = false;
  username = '';
  password = '';
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.isLoggedValue.subscribe((data) => {
      this.isLoggedValue = data;
    });
  }

  ngOnInit(): void {}
  login() {
    console.log(this.username);
    
    this.loginService.login(this.username, this.password).subscribe((data) => {
      this.loginService.token = data.sid;
      this.loginService.user = data.user;
      localStorage.setItem('token', data.sid);
      if (data.msg == 'OK') {
        this.loginService.setLoginStatus(true);
        this.isAdmin()
      }
    },(err)=> {

    }, ()=>{
      this.router.navigate(['/', 'vehicles']);
    });
  }
  isAdmin(){
    let sid = localStorage.getItem('token');
    this.loginService.isAdmin(sid).subscribe((data)=>{
      if(data.msg == "OK"){
        console.log("OK");
        this.loginService.setAdminStatus(true)
        localStorage.setItem("isAdmin", 'true')
      }else{
        this.loginService.setAdminStatus(false)
        localStorage.setItem("isAdmin", 'false')
      }
    })
  }
}
