import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VehiclesService } from 'src/app/services/vehicles.service';
@Component({
  selector: 'app-user-vehicle',
  templateUrl: './user-vehicle.component.html',
  styleUrls: ['./user-vehicle.component.scss']
})
export class UserVehicleComponent implements OnInit {
  private routeSub: Subscription;
  vhc_id;
  vehicle;
  dataSource;
  displayedColumns = ['ser_id','ser_date','srt_name','ser_total_sum']
  constructor(private router: Router, private route: ActivatedRoute, private vehicleService: VehiclesService) {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']); //log the value of id
      this.vhc_id = params['id'];
      console.log(this.vhc_id);
      this.getVehicle()
    });
   }

  ngOnInit(): void {
    
  }
  getVehicle() {
    this.vehicleService.getVehicleById(this.vhc_id).subscribe((data) => {
      console.log(data);
      this.vehicle = data.vehicle;
      this.getAllVehicleServices()
    });
  }
  getAllVehicleServices() {
    this.vehicleService.getVehicleServices(this.vhc_id).subscribe((data) => {
      console.log(data);
      this.dataSource = data.services
      console.log(this.dataSource);


    })
  }
}
