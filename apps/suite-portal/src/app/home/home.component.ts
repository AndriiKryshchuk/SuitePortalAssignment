import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ALL_SERVICE_TYPES } from '@suiteportal/api-interfaces';
import { MaintenanceApiService } from './../services/maintenance-api.service';

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

  constructor(
    private maintenanceService: MaintenanceApiService,
    private snackBar: MatSnackBar) {
    //
  }

  ngOnInit(): void {
    //  
  }

  onSubmit() {  
    if (this.maintenanceForm.valid ) {
      const newMaintenance = this.maintenanceForm.value;
      this.maintenanceService.createMaintenance(newMaintenance).subscribe(
        res => {
          this.openSnackBar('Maintenance requests successfully created', 'Close');
          this.maintenanceForm.reset();
          this.maintenanceForm.markAsPristine(); 
          this.maintenanceForm.markAsUntouched(); 
          this.maintenanceForm.updateValueAndValidity();
        },
        err => {
          this.openSnackBar('Maintenance requests was not created', 'Close');
        }
      );
    }  
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
