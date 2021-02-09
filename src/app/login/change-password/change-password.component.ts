import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {
  changePassFormGroup: FormGroup;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.changePassFormGroup = new FormGroup({
      newPass: new FormControl('')
    });
  }

  changePassword(): any{
    const newPassword = { password: this.changePassFormGroup.get('newPass').value};
    const person = this.authenticationService.authPerson[0];
    this.authenticationService.changePassword( person.id, newPassword ).subscribe(() => {
      alert('Your Password Have Been Changed Succesfully');
    });
    this.router.navigate(['/log-in']);
  }

}
