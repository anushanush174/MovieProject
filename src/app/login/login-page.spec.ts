import { inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../app-routing.module';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [AuthenticationService],
      imports: [HttpClientTestingModule, AppRoutingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
