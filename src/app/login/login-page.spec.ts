import { inject, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginPageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [AuthenticationService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', inject(
    [AuthenticationService],
    (service: AuthenticationService) => {
      expect(service).toBeTruthy();
    }
  ));
});
