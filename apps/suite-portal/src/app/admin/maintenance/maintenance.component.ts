import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  @Input() maintenance;

  ngOnInit(): void {
    //  
  }
}
