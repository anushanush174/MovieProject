import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service';
import { AuthenticcationService } from './authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public loginFormGroup: FormGroup;
  returnUrl: string;

  constructor(
    private authenticationService: AuthenticcationService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onLogin(): void {
    const login = this.loginFormGroup.get('login').value;
    const password = this.loginFormGroup.get('password').value;

    this.authenticationService
      .getAuthData(login, password)
      .subscribe((data: any[]) => {
        if (data.length) {
          localStorage.setItem('userData', JSON.stringify(data));
          alert('Success');
          this.authLogin();
          this.router.navigateByUrl(this.returnUrl);
        } else {
          alert('Please try again :( ');
          this.loginFormGroup.reset();
        }
      });
  }

  authLogin(): any {
    return this.authService.login();
  }
}
