import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public registrationFormGroup: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      login: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPass: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  signup(): void {
    this.authenticationService.getEmail(this.registrationFormGroup.get('email').value).subscribe( res => {
      if (res.length) {
        alert('This Email Has Already Been Used ');
      } else {
        if (this.registrationFormGroup.valid) {
          if (this.registrationFormGroup.get('password').value === this.registrationFormGroup.get('repeatPass').value) {
            const formData = {
              login: this.registrationFormGroup.get('login').value,
              email: this.registrationFormGroup.get('email').value,
              password: this.registrationFormGroup.get('password').value,
            };
            this.authenticationService.createUser(formData).subscribe();
            this.registrationFormGroup.reset();
            this.router.navigate(['/log-in']);
          } else {
            alert('Please Write Correct Password');
          }
        }
      }
    });
  }

}
