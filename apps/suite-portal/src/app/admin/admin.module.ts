import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared.module';
import { MaintenanceListModule } from './maintenance-list/maintenance-list.module';
import { AdminRoutingModule } from './admin.routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaintenanceListModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminComponent, LoginComponent],
  exports: [AdminComponent, LoginComponent]
})
export class AdminModule { }
