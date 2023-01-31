import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class NotAdminAuthGuard implements CanActivate {

  isAdmin = false
  constructor(private loginService: LoginService, private _router: Router) {
    this.isAdmin = localStorage.getItem('isAdmin') == "true" ? true : false
  }

  canActivate(): boolean {
    // this.loginService.isAdminValue.subscribe((data) => {
    //     console.log(data);
    //     console.log();

    //   if (data) {
    //     return true;
    //   } else {
    //     this._router.navigate(['/main']);
    //     return false;
    //   }
    // });
    if (this.isAdmin) {
      return true;
    } else {
      this._router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
