import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaintenanceListComponent } from './maintenance-list.component';
import { SharedModule } from '../../shared.module';
import { MaintenanceModule } from '../maintenance/maintenance.module';
import { AuthService } from '../../services';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const MaintenancesMock = [
{
  "id": "ln75QK_mB_",
  "name": "ssss",
  "email": "d@d.d",
  "unitNumber": "aaaa",
  "serviceType": "general",
  "summary": "wsefsef",
  "details": "ssefsefsef",
  "closedAt": "2024-07-06T03:50:37.878Z",
  "submittedAt": "2024-07-06T03:50:04.637Z"
},
{
  "id": "ln75QK_mB",
  "name": "ssss",
  "email": "d@d.d",
  "unitNumber": "aaaa",
  "serviceType": "general",
  "summary": "wsefsef",
  "details": "ssefsefsef",
  "closedAt": "2024-07-06T03:50:37.878Z",
  "submittedAt": "2024-07-06T03:50:04.637Z"
}
];

describe('MaintenanceListComponent', () => {
  let component: MaintenanceListComponent;
  let fixture: ComponentFixture<MaintenanceListComponent>;
  let authServiceService: AuthService;
  let authServiceSpy: any;

 // const serviceInjectedSpy: jasmine.SpyObj<AuthService> = jasmine.createSpyObj('AuthService', ['isAuthenticatedUser']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceListComponent ],
      providers: [AuthService],
      imports: [
        SharedModule,
        MaintenanceModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceListComponent);
    const debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();

    authServiceService = debugElement.injector.get(AuthService);
    authServiceSpy = spyOn(authServiceService, 'isAuthenticatedUser').and.callThrough();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('MaintenanceListComponent call "onCancel"', () => {
    it('should call isAuthenticatedUser', () => {
      component.onCancel('test');
      expect(authServiceSpy).toHaveBeenCalled();
    });
  });
});
