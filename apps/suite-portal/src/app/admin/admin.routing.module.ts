import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { AuthGuardService } from '../services/guards';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path:"",
    redirectTo: 'maintenances'
  },
  { 
    path:"maintenances",
    component: MaintenanceListComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path:"login",
    component: LoginComponent
  },
  
];

@NgModule({
  exports: [RouterModule],
  providers: [AuthGuardService],
  imports:[RouterModule.forChild(routes)]
})
export class AdminRoutingModule {}
