import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private _router: Router) {}

  canActivate(): boolean {
    this.loginService.isLoggedValue.subscribe((data) => {
      if (data) {
        this._router.navigate(['vehicles']);
        return false;
      } else {
        return true;
      }
    });
    return true;
  }
}
