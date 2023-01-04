import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['vhc_id', 'bra_name', 'mod_name', 'vhc_registration', 'vhc_chassis_number'];
  dataSource
  constructor(
    private vehicleService: VehiclesService,
    private loginService: LoginService
  ) {}
  vehicles;
  ngOnInit(): void {
    this.getAllVehiclesByUserId();
  }

  getAllVehiclesByUserId() {
    this.vehicleService
      .getVehiclesById(this.loginService.user.usr_id)
      .subscribe((data) => {
        this.vehicles = data.vehicleData;
        this.dataSource = this.vehicles
      });
  }
  test(id){
    console.log(id);
    
  }
}
