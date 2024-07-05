import { MaintenanceApiService } from './../services/maintenance-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ALL_SERVICE_TYPES, MaintenanceRequest } from '@suiteportal/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  maintenances$: Observable<MaintenanceRequest[]>;

  constructor(private maintenanceService: MaintenanceApiService) {
    //
  }

  ngOnInit(): void {
    this.maintenances$ = this.maintenanceService.getAllMaintenances();
  }

  onSubmit() {  
    // if (this.maintenanceForm.valid ) {
    //   // create maintenance
    // }  
  }
}
