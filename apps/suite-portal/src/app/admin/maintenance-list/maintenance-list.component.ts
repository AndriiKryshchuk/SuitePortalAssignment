import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaintenanceRequest } from '@suiteportal/api-interfaces';
import { MaintenanceApiService } from '../../services';
import { Observable } from 'rxjs';
import { Maintenance } from '../../interfaces/ui-interface';

@Component({
  selector: 'pm-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {

  @Input() maintenances: Maintenance[];
  maintenances$: Observable<Maintenance[]>;
  isMaintenanceCanceled = true;   ///  temporary for check

  constructor(
    private authService: AuthService,
    public maintenanceService: MaintenanceApiService
  ) {
    //
  }

  ngOnInit(): void {
    this.maintenances$ = this.maintenanceService.getAllMaintenances();
  }

  onCancel(maintenance: Maintenance) {
    if(this.authService.isAuthenticatedUser()) {
      console.log('maintenances CANCELED: ', maintenance);
    }
    
  }
}
