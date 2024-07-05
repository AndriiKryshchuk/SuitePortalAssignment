import { MaintenanceApiService } from './../services/maintenance-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ALL_SERVICE_TYPES, MaintenanceRequest } from '@suiteportal/api-interfaces';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serviceTypes = ALL_SERVICE_TYPES;

  maintenanceForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      unitNumber: new FormControl(null, [Validators.required]),
      serviceType: new FormControl(null, [Validators.required]),
      summary: new FormControl(null, [Validators.required]),
      details: new FormControl(''),
    }
  );

  constructor(private maintenanceService: MaintenanceApiService) {
    //
  }

  ngOnInit(): void {
    //  
  }

  onSubmit() {  
    if (this.maintenanceForm.valid ) {
      // create maintenance
      const newMaintenance = this.maintenanceForm.value;
      this.maintenanceService.createMaintenance(newMaintenance)
    }  
  }
}
