import { MaintenanceRequest } from "@suiteportal/api-interfaces";



export interface Maintenance extends MaintenanceRequest {
    // Request Id
    id: string;
    // Email of the requester
    isCanceled: boolean;
  }