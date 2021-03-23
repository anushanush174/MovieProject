import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  returnUrl: string;

  constructor(
    private authenticationService: AuthService,
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

  public onLogin(): void {
    const login = this.loginFormGroup.get('login').value;
    const password = this.loginFormGroup.get('password').value;

    this.authenticationService.getAuthData(login, password).subscribe((data: any[]) => {
      if (data.length) {
        localStorage.setItem('userData', JSON.stringify(data));
        // this.authLogin();
        this.router.navigateByUrl(this.returnUrl);
      } else {
        alert('Please try again :( ');
        this.loginFormGroup.reset();
      }
    });
  }

  /*istanbul ignore next*/
  private authLogin(): any {
    // return this.authService.login();
  }
}
