import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticcationService } from './authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(private authenticationService: AuthenticcationService) {}

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
        login: new FormControl(''),
        password: new FormControl(''),
    });
  }

  onLogin(): void {
    const login = this.loginFormGroup.get('login').value;
    const password = this.loginFormGroup.get('password').value;

    this.authenticationService
        .getAuthData(login, password)
        .subscribe((data) => {
            data.forEach((res) => {
                if (res.login === login && res.password === password) {
                    localStorage.setItem('userData', JSON.stringify(data));
                    alert('Success');
                }else{
                    alert('Please try again :( ');
                }
        });
        });
    }
}
