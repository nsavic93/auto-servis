import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VehiclesService } from 'src/app/services/vehicles.service';
import * as moment from 'moment';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  private routeSub: Subscription;
  ser_id;
  service;
  service_type;
  serviceItems;
  dataSource;
  displayedColumns = ['art_product', 'art_name', 'itm_price', 'itm_amount', 'ukupno']
  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      // console.log(params); //log the entire params object
      // console.log(params['id']); //log the value of id
      this.ser_id = params['id'];
    });
    // console.log(this.ser_id);
    this.getServiceById()

  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  getServiceById() {
    this.vehicleService.getServiceById(this.ser_id).subscribe((data) => {
      console.log(data);
      this.service = data.services[0]
      this.service_type = data.services[0].srt_id
      this.serviceItems = data.serviceItems
      this.dataSource = this.serviceItems
      console.log(this.serviceItems);

    })
  }
  formatDateToLocal(date) {
    // return moment.utc(date).local().format(('HH:mm:ss DD.MM.YYYY.')).toString();
    return moment.utc(date).local().format(('DD.MM.YYYY.')).toString();
  }
}
