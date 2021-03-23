import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})

export class ResetPasswordComponent implements OnInit {
  changePassFormGroup: FormGroup;
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.changePassFormGroup = new FormGroup({
      newPass: new FormControl(''),
      repeatNewPass:  new FormControl('')
    });
  }

  public changePassword(): any{
    const newPass = this.changePassFormGroup.get('newPass').value;
    const repeatedPass = this.changePassFormGroup.get('repeatNewPass').value;

    if (newPass === repeatedPass) {
      const newPassword = { password: newPass };
      const person = this.authenticationService.authPerson[0];
      console.log(person);
      this.authenticationService.changePassword( person.id, newPassword ).subscribe(() => {
        alert('Your Password Have Been Changed Successfully');
        this.router.navigate(['auth/login']);
      });
    } else {
      alert('Something Gone Wrong, Try Again');
    }
  }

}
