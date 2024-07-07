import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceComponent } from './maintenance.component';
import { SharedModule } from '../../shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const MaintenanceMock = {
    "id": "ln75QK_mB_",
    "name": "ssss",
    "email": "d@d.d",
    "unitNumber": "aaaa",
    "serviceType": "general",
    "summary": "wsefsef",
    "details": "ssefsefsef",
    "closedAt": "2024-07-06T03:50:37.878Z",
    "submittedAt": "2024-07-06T03:50:04.637Z"
  };

describe('MaintenanceComponent', () => {
  let component: MaintenanceComponent;
  let fixture: ComponentFixture<MaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceComponent ],
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceComponent);
    fixture.componentInstance.maintenance = MaintenanceMock
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });
});
