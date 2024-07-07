import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaintenanceRequest, ServiceType } from '@suiteportal/api-interfaces';
import { Observable, of } from 'rxjs';
import { Maintenance } from '../interfaces/ui-interface';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceApiService {

  constructor(private http: HttpClient) { }

  mockMaintenances = [
    {
      name: 'Bob',
      email: 'Bob@a.a',
      unitNumber: '12345',
      serviceType: ServiceType.Electrical,
      summary: 'doesn\'t work',
      details: 'doesn\'t work',
    },
    {
      name: 'Bob',
      email: 'Bob@a.a',
      unitNumber: '12345',
      serviceType: ServiceType.Electrical,
      summary: 'doesn\'t work',
      details: 'doesn\'t work',
    },
    {
      name: 'Bob',
      email: 'Bob@a.a',
      unitNumber: '12345',
      serviceType: ServiceType.Electrical,
      summary: 'doesn\'t work',
      details: 'doesn\'t work',
    },
    {
      name: 'Bob',
      email: 'Bob@a.a',
      unitNumber: '12345',
      serviceType: ServiceType.Electrical,
      summary: 'doesn\'t work',
      details: 'doesn\'t work',
    },
    {
      name: 'Ron',
      email: 'Ron@a.a',
      unitNumber: '12345',
      serviceType: ServiceType.General,
      summary: 'doesn\'t work',
      details: 'doesn\'t work',
    }
  ] as MaintenanceRequest[];

  apiURL = {
    baseUrl: '/api',
    maintenance: 'maintenance-requests',
    closeMaintenance: (id) => `maintenance-requests/${id}/close`,
    deleteMaintenance: (id) => `maintenance-requests/${id}/delete` 
  };

  getAllMaintenances() {
    // return of(this.mockMaintenances);
    return this.http.get(`${this.apiURL.baseUrl}/${this.apiURL.maintenance}`) as Observable<Maintenance[]>;
  }

  createMaintenance(maintenance: MaintenanceRequest) {
    return this.http.post(`${this.apiURL.baseUrl}/${this.apiURL.maintenance}`, maintenance);
  }

  closeMaintenance(id: string) {    
    return this.http.put(`${this.apiURL.baseUrl}/${this.apiURL.closeMaintenance(id)}`, {});
  }

  deleteMaintenance(id: string) {    
    return this.http.delete(`${this.apiURL.baseUrl}/${this.apiURL.deleteMaintenance(id)}`);
  }
} 