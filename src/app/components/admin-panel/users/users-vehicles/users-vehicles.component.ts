import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vehicle } from 'src/app/model/IVehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-users-vehicles',
  templateUrl: './users-vehicles.component.html',
  styleUrls: ['./users-vehicles.component.scss']
})
export class UsersVehiclesComponent implements OnInit {
  private routeSub: Subscription;
  vhc_id;
  vehicles;
  dataSource;
  displayedColumns: string[] = ['bra_name', 'mod_name', 'vhc_registration', 'vhc_chassis_number'];
  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehiclesService) { }

  vehicle: Vehicle = {
    bra_id: 0,
    bra_name: '',
    mod_id: 0,
    mod_name: '',
    usr_id: 0,
    vhc_chassis_number: '',
    vhc_id: 0,
    vhc_registration: '',
  };
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']); //log the value of id
      this.vhc_id = params['id'];
    });
    this.getAllVehiclesByUserId();
  }
  test(id) {
    let r = '/admin-panel/user-vehicle/' + id
    this.router.navigate([r])
  }
  getAllVehiclesByUserId() {
    this.vehicleService
      .getVehiclesById(this.vhc_id)
      .subscribe((data) => {
        this.vehicles = data.vehicleData;
        this.dataSource = this.vehicles;
        console.log(this.dataSource);

      });
  }
  goToUser(vhc_id) {
    console.log(vhc_id);

    let route = 'user-vehicles/' + vhc_id
    console.log(route);

    this.router.navigate(['/', route]);
  }
}
