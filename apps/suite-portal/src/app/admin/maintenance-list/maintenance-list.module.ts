import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceListComponent } from './maintenance-list.component';
import { SharedModule } from '../../shared.module';
import { MaintenanceModule } from '../maintenance/maintenance.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaintenanceModule
  ],
  declarations: [MaintenanceListComponent],
  exports: [MaintenanceListComponent]
})
export class MaintenanceListModule { }
