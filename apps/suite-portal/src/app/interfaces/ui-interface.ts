import { MaintenanceRequest } from "@suiteportal/api-interfaces";



export interface Maintenance extends MaintenanceRequest {
    // Request Id
    id: string;
    // close request date
    closedAt: string;
  }