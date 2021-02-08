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
    let admin;
    this.authenticationService.authDataSubj.subscribe(result => {
      result.filter(res => admin = res);
    });
    console.log(admin);
    this.authenticationService.changePassword( 1 , newPassword ).subscribe();
    alert('Your Password Have Been Changed Succesfully');
    this.router.navigate(['/log-in']);
  }

}
