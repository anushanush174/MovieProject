import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public registrationFormGroup: FormGroup;
  public formData: User;

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      login: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatPass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  public signup(): void {
    this.authenticationService.getEmail(this.registrationFormGroup.get('email').value).subscribe( res => {
      if (res.length) {
        alert('This Email Has Already Been Used ');
      } else {
        if (this.registrationFormGroup.valid) {
          if (this.registrationFormGroup.get('password').value === this.registrationFormGroup.get('repeatPass').value) {
            this.formData = {
              login: this.registrationFormGroup.get('login').value,
              email: this.registrationFormGroup.get('email').value,
              password: this.registrationFormGroup.get('password').value,
              user_type: 'user'
            };
            this.authenticationService.createUser(this.formData).subscribe();
            this.registrationFormGroup.reset();
            this.router.navigate(['auth/login']);
          } else {
            alert('Please Write Correct Password');
          }
        }
      }
    });
  }

}
