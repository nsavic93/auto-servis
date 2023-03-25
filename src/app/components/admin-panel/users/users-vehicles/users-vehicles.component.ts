import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vehicle } from 'src/app/model/IVehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  showAddNewVehicleDialog = false

  selectedCar: number;

  cars = [

  ];
  selectedModel: number;
  models = []
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']); //log the value of id
      this.vhc_id = params['id'];
    });
    this.getAllVehiclesByUserId();

    this.vehicleService.getCarBrands().subscribe((data) => {

      this.cars = data.brands
    })


  }

  aa() {
    console.log(this.selectedCar);
    if (!this.selectedCar) {
      this.models = []
      this.selectedModel = null
    }
    this.vehicleService.getCarModelsById(this.selectedCar).subscribe((data) => {

      this.models = data.models
      console.log(this.models);

    })
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
  openDialogForAddNewVehicle() {
    this.showAddNewVehicleDialog = true
  }
  closeDialogForAddNewVehicle() {
    this.showAddNewVehicleDialog = false
  }

}
