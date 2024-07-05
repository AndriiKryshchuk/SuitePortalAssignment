import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MaintenanceComponent],
  exports: [MaintenanceComponent]
})
export class MaintenanceModule { }
