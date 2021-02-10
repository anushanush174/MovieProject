import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('')
    });
  }

  submit(): void {
    const email = this.formGroup.get('email').value;
    this.authenticationService.getEmail(email).subscribe(result => {
      if (result.length) {
        this.authenticationService.authPerson = result;
        this.router.navigate(['/change-pass']);
      } else {
        alert('please write correct email');
        this.formGroup.reset();
      }
    });
  }

}
