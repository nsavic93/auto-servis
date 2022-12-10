import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class NotLoggedInAuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private _router: Router) {}

  canActivate(): boolean {
    this.loginService.isLoggedValue.subscribe((data) => {
      if (data) {
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
    });
    return true;
  }
}
