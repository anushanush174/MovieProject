import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationService } from '../authentication.service';
import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let service: AuthenticationService;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [AuthenticationService],
      imports: [HttpClientTestingModule, AppRoutingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = new AuthenticationService(null);
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoult create form with 4 controls', () => {
    expect(component.registrationFormGroup.contains('login')).toBeTruthy();
    expect(component.registrationFormGroup.contains('email')).toBeTruthy();
    expect(component.registrationFormGroup.contains('password')).toBeTruthy();
    expect(component.registrationFormGroup.contains('repeatPass')).toBeTruthy();
  });

  it('should work validation in case of control empty', () => {
    const control = component.registrationFormGroup.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });


});
