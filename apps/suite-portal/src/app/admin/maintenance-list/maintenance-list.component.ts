import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ALL_SERVICE_TYPES, MaintenanceRequest } from '@suiteportal/api-interfaces';

@Component({
  selector: 'pm-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {

  @Input() maintenances: MaintenanceRequest[];

  constructor() {
    //
  }

  ngOnInit(): void {
    //  
  }

  onCancel(maintenance: MaintenanceRequest) {
    console.log('maintenances CANCELED: ', maintenance);
    
  }
}
