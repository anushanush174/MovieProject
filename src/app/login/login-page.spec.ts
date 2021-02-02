import { inject, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AuthenticcationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginPageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [AuthenticcationService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', inject(
    [AuthenticcationService],
    (service: AuthenticcationService) => {
      expect(service).toBeTruthy();
    }
  ));
});
