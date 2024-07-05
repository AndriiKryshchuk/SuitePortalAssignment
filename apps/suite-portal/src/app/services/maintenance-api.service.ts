import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaintenanceRequest, ServiceType } from '@suiteportal/api-interfaces';
import { of } from 'rxjs';

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
    closeMaintenance: (id) => `maintenance-requests/${id}/close` 
  };

  getAllMaintenances() {
    return of(this.mockMaintenances);
    this.http.get(`${this.apiURL.baseUrl}/${this.apiURL.maintenance}`);
  }

  createMaintenance(maintenance: MaintenanceRequest) {
    console.log('maintenance CREATED: ', {maintenance});
    this.http.post(`${this.apiURL.baseUrl}/${this.apiURL.maintenance}`, maintenance)
  }

  closeMaintenance(maintenance: MaintenanceRequest) {
    console.log('maintenance CREATED: ', {maintenance});
    
    this.http.put(`${this.apiURL.baseUrl}/${this.apiURL.closeMaintenance(maintenance.email)}`, maintenance);
  }
} 