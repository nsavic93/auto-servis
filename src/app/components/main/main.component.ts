import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  vehicles;
  constructor(
    private vehicleService: VehiclesService,
    private loginService: LoginService,
    private router: Router
  ) {
    // this.routerNavigate()
  }

  ngOnInit(): void {}

  routerNavigate() {
    this.loginService.isLoggedValue.subscribe((data) => {
      if (data) {
        this.router.navigate(['/', 'vehicles']);
      } else {
        this.router.navigate(['/', 'login']);
      }
    });
  }
}
