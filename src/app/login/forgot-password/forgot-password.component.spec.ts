import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationService } from '../authentication.service';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let service: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      providers: [AuthenticationService],
      imports: [HttpClientTestingModule, AppRoutingModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = new AuthenticationService(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 1 control', () => {
    expect(component.formGroup.contains('email')).toBeTruthy();
  });
});
