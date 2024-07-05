import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { AuthGuardService } from '../services/guards';

const routes: Routes = [
  { path:"", component: AdminComponent } ,
  { 
    path:"maintenances",
    component: MaintenanceListComponent,
    canActivate: [AuthGuardService]
  } ,
];

@NgModule({
  exports: [RouterModule],
  providers: [AuthGuardService],
  imports:[RouterModule.forChild(routes)]
})
export class AdminRoutingModule {}
