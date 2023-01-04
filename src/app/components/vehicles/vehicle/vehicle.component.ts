import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vehicle } from 'src/app/model/IVehicle';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  private routeSub: Subscription;
  dataSource
  displayedColumns = ['ser_id','ser_date','srt_name','ser_total_sum']
  vhc_id;
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
  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehiclesService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']); //log the value of id
      this.vhc_id = params['id'];
    });
    this.getVehicle();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getVehicle() {
    this.vehicleService.getVehicleById(this.vhc_id).subscribe((data) => {
      console.log(data);
      this.vehicle = data.vehicle;
      this.getAllVehicleServices()
    });
  }
  getAllVehicleServices(){
    this.vehicleService.getVehicleServices(this.vhc_id).subscribe((data) => {
      console.log(data);
      this.dataSource = data.services
    })
  }
  test(ser_id){
    console.log(ser_id);
    
  }
}
