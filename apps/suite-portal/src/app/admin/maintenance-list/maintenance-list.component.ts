import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Maintenance } from '../../interfaces/ui-interface';
import { MaintenanceApiService } from '../../services';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {

  @Input() maintenances: Maintenance[];
  dataSource$: Observable<Maintenance[]>;
  
  updateData = new BehaviorSubject(null);

  constructor(
    private authService: AuthService,
    public maintenanceService: MaintenanceApiService,
    private router: Router
  ) {
    //
  }

  ngOnInit(): void {
    this.dataSource$ = this.updateData
      .pipe(
        switchMap(() => this.maintenanceService.getAllMaintenances())
      );
  }

  onCancel(id: string) {
    if(this.authService.isAuthenticatedUser()) {
      // console.log('maintenances CANCELED: ', maintenance);
    }
    this.maintenanceService.closeMaintenance(id).subscribe(
      (res) => {
        console.log('CANCELED', res);
        this.updateData.next(null);
      }
    )

    
  }
  onDelete(id: string) {
    if(this.authService.isAuthenticatedUser()) {
      // console.log('maintenances CANCELED: ', maintenance);
    }
    this.maintenanceService.deleteMaintenance(id).subscribe(
      (res) => {
        console.log('DELETE', res);
        this.updateData.next(null);
      }
    )

    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
